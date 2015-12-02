//var app = require('../../server/server');
var Promise = require("bluebird");
module.exports = function(Event) {
    
    // once a model is attached to the data source
    Event.on('dataSourceAttached', function( obj ){
        // wrap the whole model in Promise
        // but we need to avoid 'validate' method 
        Event = Promise.promisifyAll( Event, 
            {filter: function(name, func, target){
                return !( name == 'validate');
            }} 
        );
    });
	
    // Event.observe('after save', function (ctx, next) {
    //   console.log("after save?");
    //     console.log(ctx.instance);
    //     Event.app.io.emit('roommsg', ctx.instance);
    //   next();
    // });
    // 
    // Event.emit = function(event) {
    //     console.log("EVENTEMIT:", event, arguments);
    //     //Event.app.io.emit('eventmsg', event);
    // }
    // 
    // Event.prototype.broadcast = function(event) {
    //     console.log("EVENTbroadcast:", this);
    //     Event.app.io.emit('eventmsg', {test: "Hello World"});
    // }
    
    Event.scrobble = function(locationId, 
        albumName,
        artistName,
        trackName,
        playlist,
        trackuri,
        cb) {
            console.log("##### SCROBBLE CALLED");
            console.log("##### Artist: " + artistName);
            console.log("##### Album: " + albumName);
            console.log("##### Track: " + trackName);
            var vm = { LocationId: locationId, Track: [] },
                models = Event.app.models;
            
            // make sure artist, track, album exist, otherwise create them
            Event.app.models.Artist.findOrCreateOnNameAsync(artistName)
            .then(function(artist){
                vm.artist = artist;
                return models.Album.findOrCreateOnTitleAndArtistAsync(albumName, vm.artist.id);
            })
            .then(function(album) {
                console.log("##### album saved");
                Event.app.io.emit('toastmsg', "album saved");
                vm.album = album;
                vm.album["artist"] = vm.artist;
            
                return models.Track.findOrCreateOnArtistAlbumAndTitleAsync(
                    vm.artist.id, vm.album.id, trackName);
            })
            .then(function(track) {
                console.log("##### track saved");
                Event.app.io.emit('toastmsg', "track saved");
                vm.track = track;
                return Event.createAsync({ LocationID: locationId, EventTypeID: 1 });
            })
            .then(function(event) {
                console.log("##### event saved");
                Event.app.io.emit('toastmsg', "event saved");
                vm.event = event;
                return models.TrackEvent.createAsync({ id: vm.event.id, TrackID: vm.track.id });
            })
            .then(function(trackEvent) {
                console.log("##### track event saved");
                Event.app.io.emit('toastmsg', "track event saved");
                vm.trackEvent = trackEvent;
                return models.TrackAudio.findOneAsync({ where: { id: vm.track.id } })
            })
            .then(function(trackAudio) {
                console.log("##### track audio...done");
                Event.app.io.emit('toastmsg', "track audio done");
                
                if ((!trackAudio) || (!vm.artist.musicbrainzId)) {
                    // need to get the track attributes from echonest
                    return [ models.TrackAudio.getAttributes(vm.artist.Name, vm.track.id, vm.track.Title), trackAudio];
                } else {
                    return [null, trackAudio];
                }
            })
            .spread(function(echonest, trackAudio) {
                console.log("##### echonest...done");
                Event.app.io.emit('toastmsg', "echonest done");
                
                var promises = [];
                vm.trackAudio = trackAudio; // maybe empty but echonest should return track audio if it is
                
                if(echonest) {
                    if((echonest.trackAudio) && (!trackAudio)) {
                        // store the echonest attributes in the db
                        vm.trackAudio = echonest.trackAudio;
                        promises.push(models.TrackAudio.createAsync(echonest.trackAudio));
                    }
                    
                    if((echonest.artistmusicbrainzId) && (!vm.artist.musicbrainzId)) {
                        vm.artist.musicbrainzId = echonest.artistmusicbrainzId;
                        promises.push(vm.artist.updateAttributeAsync('musicbrainzId', echonest.artistmusicbrainzId));
                    }
                }
                
                return Promise.all(promises);
            })
            .then(function() {
                console.log("##### all...done");
                Event.app.io.emit('toastmsg', "ALL done");
                // create an Event graph to send back to client
                var eventScrobbleVM = vm.event.toJSON();
                eventScrobbleVM.LocationID = vm.LocationId;
                eventScrobbleVM.track = [];
                eventScrobbleVM.track[0] = vm.track.toJSON();
                eventScrobbleVM.track[0].album = vm.album.toJSON();
                eventScrobbleVM.track[0].artist = vm.artist.toJSON();
                eventScrobbleVM.track[0].audio = vm.trackAudio.toJSON();
                Event.app.io.emit('event-location-' + vm.LocationId, eventScrobbleVM);
                cb(null, eventScrobbleVM);
            })
            .catch(console.error);
    }
     
    Event.remoteMethod(
        'scrobble', 
        {
          accepts: [
              {arg: 'locationId', type: 'number'},
              {arg: 'albumName', type: 'string'},
              {arg: 'artistName', type: 'string'},
              {arg: 'trackName', type: 'string'},
              {arg: 'playlist', type: 'string'},
              {arg: 'trackuri', type: 'string'},
            ],
          returns: {arg: 'Event', type: 'object'}
        }
    );
};