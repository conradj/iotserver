module.exports = function mountLoopBackExplorer(server) {
  var explorer;
  console.log("explorer.js1");
  try {
    explorer = require('loopback-explorer');
    console.log("explorer.js2");
  } catch(err) {
    // Print the message only when the app was started via `server.listen()`.
    // Do not print any message when the project is used as a component.
    server.once('started', function(baseUrl) {
      console.log(
        'Run `npm install loopback-component-explorer` to enable the LoopBack explorer'
      );
    });
    return;
  }

  var restApiRoot = server.get('restApiRoot');

  var explorerApp = explorer.routes(server, { basePath: restApiRoot });
  console.log("explorer.js3");
  server.use('/explorer', explorerApp);
  server.once('started', function() {
    console.log("explorer.js4");
    var baseUrl = server.get('url').replace(/\/$/, '');
    // express 4.x (loopback 2.x) uses `mountpath`
    // express 3.x (loopback 1.x) uses `route`
    var explorerPath = explorerApp.mountpath || explorerApp.route;
    console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
  });
};
