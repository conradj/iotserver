var Promise = require("bluebird");

module.exports = function(TrackEvent) {	
    // once a model is attached to the data source
    TrackEvent.on('dataSourceAttached', function( obj ){
        // wrap the whole model in Promise
        // but we need to avoid 'validate' method 
        TrackEvent = Promise.promisifyAll( TrackEvent, 
            {filter: function(name, func, target){
                return !( name == 'validate');
            }} 
        );
    });
};