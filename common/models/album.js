var Promise = require("bluebird");

module.exports = function(Album) {
    // once a model is attached to the data source
    Album.on('dataSourceAttached', function( obj ){
        // wrap the whole model in Promise
        // but we need to avoid 'validate' method 
        Album = Promise.promisifyAll( Album, 
            {filter: function(name, func, target){
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
    
    Album.observe('after save', function(ctx, next) {
        console.log('supports isNewInstance?', ctx.isNewInstance !== undefined);
        next();
    });
    
    Album.remoteMethod(
        'findOrCreateOnTitleAndArtist', 
        {
          accepts: [{arg: 'title', type: 'string'}, {arg: 'artistid', type: 'number'}],
          returns: {arg: 'Album', type: 'object'}
        }
    );
    
    Album.test = function(cb) {
        Album.find({
           //"where": { "Name": "Herman Dune" },
            "include": {"relation": "artist", 
                "scope": {"where":{"id": {inq: [1, 2]}}}}
            }
        , function(err, instance) {
            if (err){
              cb(null, err);
            }
            cb(null, instance);    
        });
    }
    
    // Artist.find({"filter": {
    //                 "where": {"id": $state.params.id},
    //                 "include": {"relation": "classes", "scope": {"include": ["students"]}}
    //           }
    // })
    
    Album.remoteMethod(
        'test',
        {
            http: {path: '/test', verb: 'get'},
            returns: {arg: 'Album', type: 'object'}
        }
    );
};