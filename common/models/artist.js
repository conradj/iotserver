var Promise = require("bluebird");

module.exports = function(Artist) {	
    
    // once a model is attached to the data source
    Artist.on('dataSourceAttached', function( obj ){
        // wrap the whole model in Promise
        // but we need to avoid 'validate' method 
        Artist = Promise.promisifyAll( Artist, 
            {filter: function(name, func, target){
                return !( name == 'validate');
            }} 
        );
    });
    
    Artist.findOrCreateOnName = function(name, cb) {
        Artist.findOrCreate({where: {Name: name} }, {Name: name}, function(err, instance) {
            if (err){
              cb(null, err);
            }
            cb(null, instance);  
        });
    };
     
    Artist.remoteMethod(
        'findOrCreateOnName', 
        {
          accepts: {arg: 'name', type: 'string'},
          returns: {arg: 'Artist', type: 'object'}
        }
    );
    
    Artist.test = function(cb) {
        Artist.find( {
                //"where": { "Name": "Herman Dune" },
                //"where": { "albums": { "neq": null}},
                "include": { "relation": "albums",
                    "scope": { 
                        "where": {
                            "Title": { "inq": ["Max Cambios", "The Waterfall"]}
                        }
                    }
                }
            }
        , function(err, instance) {
            if (err){
              cb(null, err);
            }
            
            var test = instance.filter(function(artist) {
                    return artist.toJSON().albums.length > 0;
                }
            )
            
            cb(null, test);    
        });
    }
    
    // Artist.find({"filter": {
    //                 "where": {"id": $state.params.id},
    //                 "include": {"relation": "classes", "scope": {"include": ["students"]}}
    //           }
    // })
    
    Artist.remoteMethod(
        'test',
        {
            http: {path: '/test', verb: 'get'},
            returns: {arg: 'Artist', type: 'object'}
        }
    );
};