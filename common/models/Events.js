module.exports = function(Event) {
    console.log("event");
    console.log(Event);
	
    Event.observe('after save', function (ctx, next) {
      console.log("after save?");
        console.log(ctx.instance);
        Event.app.io.emit('roommsg', ctx.instance);
      next();
    });
};