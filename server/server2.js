var http = require('http')
var port = process.env.PORT || 1337;
var pg = require('pg');
var conString = process.env.ELEPHANTSQL_URL || "";
var loopback = require('loopback');
var boot = require('loopback-boot');
//var sse = require('server-sent-events');
var app = module.exports = loopback();
var socketIO = require('socket.io');

var server = http.createServer(function (req, res) {
  
       pg.connect(conString, function(err, client) {
         console.log('connect');
         console.log(port);
         var query = client.query('SELECT "Name" FROM "public"."Genre" LIMIT 100', function(err, result) {
            if (err) throw err;
            console.log('callback');
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(result.rows[0].Name + "\n");
            //res.write(port);
            res.write("process.env.NODE_ENV:" + process.env.NODE_ENV + "\n");
            res.end('Hello World\n');
            });

         query.on('end', function() {
                 console.log('close');
                 // client.end(); -- not needed, client will return to the pool on drain
                 });

       });

 
  // these shouldn't be here either if you plan to write to res from within the pg 
  // callback
 

}).listen(port);



