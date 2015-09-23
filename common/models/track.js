var Promise = require("bluebird");

module.exports = function(Track) {	
    // once a model is attached to the data source
    Track.on('dataSourceAttached', function( obj ){
        // wrap the whole model in Promise
        // but we need to avoid 'validate' method 
        Track = Promise.promisifyAll( Track, 
            {filter: function(name, func, target){
                return !( name == 'validate');
            }} 
        );
    });
	Track.findOrCreateOnArtistAlbumAndTitle = function(artistid, albumid, title, cb) {
        Track.findOrCreate({where: {and: [ { ArtistID: artistid }, { AlbumID: albumid }, { Title: title }]} }, { ArtistID: artistid, AlbumID: albumid, Title: title }, function(err, track) {
            if (err){
              cb(null, err);
            }
            cb(null, track);  
        });
    };
     
    Track.remoteMethod(
        'findOrCreateOnArtistAlbumAndTitle', 
        {
          accepts: [{arg: 'artistid', type: 'number'}, {arg: 'albumid', type: 'number'}, {arg: 'title', type: 'string'}],
          returns: {arg: 'Track', type: 'object'}
        }
    );
};