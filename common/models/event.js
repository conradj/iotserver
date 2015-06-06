//var app = require('../../server/server');

module.exports = function(Event) {
    console.log("event");
    console.log(Event);
	
    Event.observe('after save', function (ctx, next) {
      console.log("after save?");
        console.log(ctx.instance);
        Event.app.io.emit('roommsg', ctx.instance);
      next();
    });
    
    Event.scrobble = function(locationId, 
        albumName,
        artistName,
        trackName,
        playlist,
        trackuri,
        cb) {
        
        //check if album, artist, track already exists
        Event.app.models.Artist.findOrCreateOnName(artistName, function(err, artist) {
            if(err) throw err;
            
            Event.app.models.Album.findOrCreateOnTitleAndArtist(albumName, artist.id, function(err, album) {
                if(err) throw err;
                
                console.log("artist:", artist);
                console.log("album:", album);
                Event.app.models.Track.findOrCreateOnArtistAlbumAndTitle(artist.id, album.id, trackName, function(err, track) {
                    if(err) throw err;
                    console.log("track:", track);
                    console.log("locationId:", locationId);
                    Event.create({ LocationID: locationId, EventTypeID: 1 }, function(err, event) {
                        if(err) throw err;
                        Event.app.models.TrackEvent.create({ id: event.id, TrackID: track.id });
                    });
                    
                });
            });
        });
        
        cb(null, {"success":"scrobbled track event"}); 
        
//        if (albumId && artistId) {
//            // see if the track already exists
//            trackId = app.Track.get(trackName, albumId, artistId);
//        }
//        
//       if (!albumId || !artistId || !trackId) {
//           
//       }
//       
//       if (!albumId) {
//           albumId = app.Album.post(album);
//       }
//       
//       if (!artistId) {
//           artistId = app.Artist.post(artist);
//       }
//       
//       if (!trackId) {
//           trackId = app.Track.post(albumId, artistId, track);
//       }
//        
//       eventId = event.post(locationId, 1);
//       trackEventId = app.trackEvent.post(eventId, trackId);
    };
     
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
          returns: {arg: 'Location', type: 'object'}
        }
    );
};