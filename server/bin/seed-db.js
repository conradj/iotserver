var Promise = require("bluebird");
var socketIO = require('socket.io');
var data = require('./seed-data.json');

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
//boot(app, __dirname);
module.exports = function seedDB(app) {
    var Location = app.models.Location;
    var Event = app.models.Event;
    
    console.log('Seeed the deebee!');
    
    var locations = [];
    
    for(var location in data.locations) {
        console.log(data.locations[location].name);
        locations.push(Location.createAsync({name: data.locations[location].name}));
    }    
    
    Promise.all(locations).then(function(createdLocations) {
        console.log("all the locations were created");
        var scrobbles = [];
        for(var location in createdLocations) {
            for(var artist in shuffleArray(data.artists)) {
                for(var album in shuffleArray(data.artists[artist].albums)) {
                    for(var track in shuffleArray(data.artists[artist].albums[album].tracks)) {
                        scrobbles.push(Event.scrobbleAsync(createdLocations[location].id, 
                            data.artists[artist].albums[album].title,
                            data.artists[artist].name,
                            data.artists[artist].albums[album].tracks[track].title)
                        )
                    }      
                }
            }
        }
        return scrobbles;
    })
    .then(function(scrobblePromises) {
        return Promise.all(scrobblePromises);
    })
    .then(function(scrobbleVMs) {
        console.log("all the scrobbles were created");
    });
    
    
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
}