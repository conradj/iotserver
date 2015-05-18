var path = require('path');
var fs = require('fs');
var server = require(path.resolve(__dirname, '../server'));
var loopback = require('loopback');
var ds = server.dataSources.db;
var app = module.exports = loopback();

ds.discoverModelDefinitions(function (err, models) {
  models.forEach(function (def) {
      // def.name ~ the model name
      ds.discoverSchema(def.name, null, function (err, schema) {
        if ( ['acl', 'accesstoken', 'role', 'rolemapping', 'test', 'user'].indexOf( def.name ) == -1 ) {
          // make sure the model property names retain the same casing as the DB columns
          for (var prop in schema.properties) {
            if(schema.properties[prop].postgresql) {
              var copyprop = schema.properties[prop];
              schema.properties[schema.properties[prop].postgresql.columnName] = copyprop;
              delete schema.properties[prop];
            }
          }
          
          if(schema.properties.ID) {
            schema.properties.ID.required = false; // if using autoincrement in your database, allow ID fields to be empty on POST/PUT
          }
          if(schema.name) { // make the model name have the same casing as table names
            schema.name = def.name;
          }
          //console.log(JSON.stringify(schema, null, 2));
          fs.writeFileSync('common/models/' + def.name + '.json', JSON.stringify(schema, null, 2), 'utf-8');
          console.log("model created:", def.name);
        }
      });
  });
});
