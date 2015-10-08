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
  },
  "echonest": {
    "name": "echonest",
    "connector": "rest",
    "operations": [
      {
        "template": {
          "useQuerystring": true,
          "debug": true,
          "method": "GET",
          "url": "http://developer.echonest.com/api/v4/song/search",
          "headers": {
            "content-type": "application/json"
          },
          "query": {
            "api_key": "{api_key=OMIDNZV2DLUMOUZTU}",
            "format": "{format=json}",
            "results": "{results=1}",
            "artist": "{artist}",
            "title": "{title}",
            "bucket": "{bucket=audio_summary}"
          }
        },
        "functions": {
          "search": [
            "artist",
            "title",
            "results"
          ]
        }
      }
    ]
  }
}
