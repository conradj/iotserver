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
            var vm = { locationId: locationId };
            // make sure artist, track, album exist, otherwise create them
            Event.app.models.Artist.findOrCreateOnNameAsync(artistName)
            .then(function(artist){
                vm.artist = artist;
                return Event.app.models.Album.findOrCreateOnTitleAndArtistAsync(albumName, vm.artist.id);
            })
            .then(function(album) {
                console.log("##### album saved");
                Event.app.io.emit('toastmsg', "album saved");
                vm.album = album;
                vm.album["artist"] = vm.artist;
                return Event.app.models.Track.findOrCreateOnArtistAlbumAndTitleAsync(
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
                return Event.app.models.TrackEvent.createAsync({ id: vm.event.id, TrackID: vm.track.id });
            })
            .then(function(trackEvent) {
                console.log("##### track event saved");
                Event.app.io.emit('toastmsg', "track event saved");
                vm.trackEvent = trackEvent;
                return Event.app.models.TrackAudio.findOrCreateSearch(vm.artist.Name, vm.track.id, vm.track.Title);
            })
            .then(function(trackAudio) {
                console.log("##### track audio...done");
                Event.app.io.emit('toastmsg', "track audio done");
                vm.trackAudio = trackAudio;
                Event.app.io.emit('eventmsg', vm); 
                cb(null, vm);
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
          returns: {arg: 'Scrobble', type: 'object'}
        }
    );
};