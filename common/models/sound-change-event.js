module.exports = function(SoundChangeEvent) {
    console.log("SoundChangeEvent");
    
//    Event.observe('before validate', function (ctx, next) {
//      console.log("before validate");
//      console.log(ctx.instance);
//      next();
//    });
    
    SoundChangeEvent.beforeValidate = function(next, modelInstance) {
      //your logic goes here - don't use modelInstance
      console.log(this);
      next();
    };
    
    
    SoundChangeEvent.beforeSave = function(next, modelInstance) {
      //your logic goes here
      modelInstance.events.add(modelInstance.locationID);
      next();
    };
};