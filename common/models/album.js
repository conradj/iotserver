module.exports = function(Album) {	
	Album.findOrCreateOnTitleAndArtist = function(title, artistid, cb) {
        Album.findOrCreate({where: {and: [{Title: title}, {ArtistID: artistid }]} }, {Title: title, ArtistID: artistid }, function(err, instance) {
            if (err){
              console.log("Album.findOrCreateOnTitleAndArtist error:", err);
              cb(null, err);
            }
            console.log("Album.findOrCreateOnTitleAndArtist:", instance);
            cb(null, instance);  
        });
    };
     
    Album.remoteMethod(
        'findOrCreateOnTitleAndArtist', 
        {
          accepts: [{arg: 'title', type: 'string'}, {arg: 'artistid', type: 'number'}],
          returns: {arg: 'Album', type: 'object'}
        }
    );
};