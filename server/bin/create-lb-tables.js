var path = require('path');
var server = require(path.resolve(__dirname, '../server'));
var ds = server.dataSources.db;
//var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role', 'room', 'track'];
var lbTables = ['location'];
ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log('Looback tables [' + lbTables + '] created in ', ds.adapter.name);
  ds.disconnect();
});