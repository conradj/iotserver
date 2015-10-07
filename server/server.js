/// <reference path="../typings/node/node.d.ts"/>
var loopback = require('loopback');
var boot = require('loopback-boot');
//var sse = require('server-sent-events');
var app = module.exports = loopback();
var socketIO = require('socket.io');

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname);

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
      console.log('a user sdasdass');
    console.log('Web server listening atssss: %s', app.get('url'));
  });
};

// start the server if `$ node server.js`
if (require.main === module) {
  var server = app.start();
   // initialize socket.io and store it in the app instance
  app.io = socketIO(server);
    
    app.io.on('connection', function(socket){
      console.log('a user connected');
    });

}

//app.listen(process.env.PORT);

/*app.use('/room', function(req, res, next ) { 
    console.log("doestnsi work");
  res.sse("dsds"); 
    console.log("doestnsi work2");
    return;
})*/
    
    