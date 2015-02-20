module.exports = function(Room) {
    console.log("room");
    
    // If we want to access the application object we need to wait until our model is added to the application
    // Source: http://docs.strongloop.com/display/LB/Migrating+existing+apps+to+version+2.0
    /*Room.on('attached', function () {
        Room.afterRemote('create', function (ctx, room, next) {
            console.log("we here?");
            Room.app.io.emit('room created1', room);
            next();
        });
    });*/
    
    Room.observe('after save', function (ctx, next) {
      console.log("after save?");
        console.log(ctx.instance);
        Room.app.io.emit('roommsg', ctx.instance);
        //Room.app.io.emit( "room:save", this)
      //ctx.Model.app.emit('room observe');
      /*if (ctx.instance) {
        //ctx.instance.updated = new Date();
          console.log("room instance");
          
      } else {
        //ctx.data.updated = new Date();
          console.log("room data");
      }*/
      next();
    });
};
