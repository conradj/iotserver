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
};