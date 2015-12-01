var Promise = require("bluebird");
var socketIO = require('socket.io');
var data = require('./seed-data.json');

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
//boot(app, __dirname);
module.exports = function seedDB(app) {
    var Location = app.models.Location;
    var Event = app.models.Event;
    
    //console.log(Event.scrobbleAsync);
    
    console.log('Seeed the deebee!');
    
    var locations = [];
    var scrobbles = [];
    
    locations.push(Location.create({name: 'Living Room 1'}));
    
    
    //var scrobbleAsync = Promise.Promisify(Event.scrobble);
    
    for(var artist in data.artists) {
        for(var album in data.artists[artist].albums) {
            for(var track in data.artists[artist].albums[album].tracks) {
            scrobbles.push(Event.scrobbleAsync(1, 
                data.artists[artist].albums[album].title,
                data.artists[artist].name,
                data.artists[artist].albums[album].tracks[track].title)
            )}      
        }
    }
    
    Promise.all(locations).then(function() {
        console.log("all the locations were created");
        return Promise.all(scrobbles);
    })
    .then(function() {
        console.log("all the scrobbles were created");
    });

}