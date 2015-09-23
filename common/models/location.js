module.exports = function(Location) {
    Location.validatesUniquenessOf('name');
    
//    Location.observe('access', function logQuery(ctx, next) {
//      console.log('Accessing %s matching %s', ctx.Model.modelName, ctx.query.where);
//      console.log('Accessing request:', ctx.req);
//      console.log('Accessing result:', ctx.res);
//      next();
//    });
//    
//    Location.observe('before save', function (ctx, next) {
//      console.log("before save?");
//      
//        console.log("bob:", ctx.instance);
//      console.log('before request:', ctx.req);
//        console.log('before result:', ctx.res);
//      next();
//    });
//    
//    Location.observe('after save', function (ctx, next) {
//      console.log("after save?");
//        console.log("after save:", ctx.instance);
//        console.log('after request:', ctx.req);
//        console.log('after result:', ctx.res);
//        Location.app.io.emit('roommsg', ctx.instance);
//      next();
//    });
    
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