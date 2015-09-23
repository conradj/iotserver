var Promise = require("bluebird");

module.exports = function(Album) {
    // once a model is attached to the data source
    Album.on('dataSourceAttached', function( obj ){
        // wrap the whole model in Promise
        // but we need to avoid 'validate' method 
        Album = Promise.promisifyAll( Album, 
            {filter: function(name, func, target){
                console.log(name);
                return !( name == 'validate');
            }} 
        );
    });
    	
	Album.findOrCreateOnTitleAndArtist = function(title, artistid, cb) {
        Album.findOrCreate({where: {and: [{Title: title}, {ArtistID: artistid }]} }, {Title: title, ArtistID: artistid }, function(err, instance) {
            if (err){
              cb(null, err);
            }
            cb(null, instance);  
        });
    };
     
    Album.remoteMethod(
        'findOrCreateOnTitleAndArtist', 
        {
          accepts: [{arg: 'title', type: 'string'}, {arg: 'artistid', type: 'number'}],
          returns: {arg: 'Album', type: 'object'}
        }
    );
};