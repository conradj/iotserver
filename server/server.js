var http = require('http')
var port = process.env.PORT || 1337;
var pg = require('pg');
var conString = process.env.ELEPHANTSQL_URL || "";
// var client = new pg.Client(conString);
// 
// http.createServer(function(req, res) {
//   client.connect(function(err) {
//     if(err) {
//       return console.error('could not connect to postgres', err);
//     }
//     client.query('SELECT NOW() AS "theTime"', function(err, result) {
//       if(err) {
//         return console.error('error running query', err);
//       }
//       res.write(process.env.NODE_ENV + "\n");
//       console.log(result.rows[0].theTime);
//       res.write(result.rows[0].theTime + "\n");
//       res.write('Hello World\n');
//       //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
//       //client.end();
//     });
//   });
// }).listen(port);

var pg = require('pg');

var server = http.createServer(function (req, res) {
  
       pg.connect(conString, function(err, client) {
         console.log('connect');
         var query = client.query('SELECT "Name" FROM "public"."Genre" LIMIT 100', function(err, result) {
            if (err) throw err;
            console.log('callback');
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(result.rows[0].Name + "\n");
            res.write(process.env.NODE_ENV + "\n");
            res.end('Hello Worldww\n');
            });

         query.on('end', function() {
                 console.log('close');
                 // client.end(); -- not needed, client will return to the pool on drain
                 });

       });

 
  // these shouldn't be here either if you plan to write to res from within the pg 
  // callback
 

}).listen(port);



