var Promise = require("bluebird");

module.exports = function(Location) {
    
    // once a model is attached to the data source
    Location.on('dataSourceAttached', function( obj ){
        // wrap the whole model in Promise
        // but we need to avoid 'validate' method 
        Location = Promise.promisifyAll( Location, 
            {filter: function(name, func, target){
                return !( name == 'validate');
            }} 
        );
    });
    
    Location.validatesUniquenessOf('name');
    
    Location.findOrCreateOnName = function(name, cb) {
        Location.findOrCreate({where: {"Name": name }}, {"Name": name }, function(err, instance) {
            if (err){
              cb(null, err);
            }
            cb(null, instance);  
        });
    };
     
    Location.remoteMethod(
        'findOrCreateOnName', 
        {
          accepts: {arg: 'Name', type: 'string'},
          returns: {arg: 'Location', type: 'object'}
        }
    );
};