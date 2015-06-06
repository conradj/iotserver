module.exports = function(Artist) {	
	Artist.findOrCreateOnName = function(name, cb) {
        Artist.findOrCreate({where: {Name: name} }, {Name: name}, function(err, instance) {
            if (err){
              console.log("Artist.findOrCreateOnName error:", err);
              cb(null, err);
            }
            console.log("Artist.findOrCreateOnName:", instance);
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