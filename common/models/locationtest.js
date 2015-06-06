//module.exports = function(locationtest) {
//    
//    //locationtest.validatesUniquenessOf('name');
//    
//	locationtest.upsertOnName = function(name, cb) {
//        locationtest.findOrCreate({where: {"name": name }}, { "name": name }, function(err, instance) {
//            if (err){
//              console.log("upsertOnName error:", err);
//              cb(null, err);
//            }
//            console.log("upsertOnName:", instance);
//            cb(null, instance);  
//        });
//    };
//     
//    locationtest.remoteMethod(
//        'upsertOnName', 
//        {
//          accepts: {arg: 'name', type: 'string'},
//          returns: {arg: 'location', type: 'object'}
//        }
//    );
//};
