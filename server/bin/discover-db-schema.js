// run with node server/bin/discover-db-schema.js tablename1 tablename2

var path = require('path');
var fs = require('fs');
var server = require(path.resolve(__dirname, '../server'));
var loopback = require('loopback');
var ds = server.dataSources.db;
var app = module.exports = loopback();
var tables = process.argv.slice(2); // send in the table name(s)

ds.discoverModelDefinitions(function (err, models) { // this gets all of the tables in the db
  models.forEach(function (def) {
      // def.name ~ the model name
      if ( ['acl', 'accesstoken', 'role', 'rolemapping', 'test', 'user'].indexOf( def.name ) == -1 ) { // don't do these ones
        if ((!tables) || (tables.indexOf( def.name) > -1)) {
          ds.discoverSchema(def.name, null, function (err, schema) {
              // make sure the model property names retain the same casing as the DB columns
              console.log("CREATING MODEL");
              for (var prop in schema.properties) {
                if(schema.properties[prop].postgresql) {
                  var copyprop = schema.properties[prop];
                  schema.properties[schema.properties[prop].postgresql.columnName] = copyprop;
                  console.log("prop:", prop);
                  console.log("copyprop.postgresql.columnName:", copyprop.postgresql.columnName);
                  if(copyprop.postgresql.columnName != prop) { // if they are different (because prop has lost the casing on column name)
                    delete schema.properties[prop];
                  }
                }
              }
              if(schema.properties.ID) {
                schema.properties.ID.required = false;
              }
              if(schema.name) { // make the model name have the same casing as table names
                schema.name = def.name;
              }
              // create the file uisng the lowercase with hyphen loopback convention
              fs.writeFileSync('common/models/' + def.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() + '.json', JSON.stringify(schema, null, 2), 'utf-8');
              console.log("model created:", def.name, " Dont forget to add model to model-config.json to expose over REST");
          });
        }
      }
  });
});
