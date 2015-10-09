var dbhost = process.env.DB_HOST,
  dbname = process.env.DB_NAME,
  dbusername = dbname,
  dbpassword = process.env.DB_PASSWORD;
  
console.log("PRODUCTION");
module.exports = {
  "db": {
    "host": dbhost,
    "port": 5432,
    "database": dbname,
    "username": dbusername,
    "password": dbpassword,
    "name": "db",
    "connector": "postgresql"
  }
}
