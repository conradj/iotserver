module.exports = function(Location) {
    console.log("location");
    
    Location.validatesUniquenessOf('Name');
    
    Location.observe('after save', function (ctx, next) {
      console.log("after save?");
        console.log(ctx.instance);
        Location.app.io.emit('roommsg', ctx.instance);
      next();
    });
};