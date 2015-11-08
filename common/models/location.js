module.exports = function(Location) {
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