module.exports = function(Track) {	
	Track.findOrCreateOnArtistAlbumAndTitle = function(artistid, albumid, title, cb) {
        Track.findOrCreate({where: {and: [ { ArtistID: artistid }, { AlbumID: albumid }, { Title: title }]} }, { ArtistID: artistid, AlbumID: albumid, Title: title }, function(err, track) {
            if (err){
              console.log("Track.findOrCreateOnArtistAlbumAndTitle:", err);
              cb(null, err);
            }
            console.log("Track.findOrCreateOnArtistAlbumAndTitle:", track);
            cb(null, track);  
        });
    };
     
    Track.remoteMethod(
        'findOrCreateOnArtistAlbumAndTitle', 
        {
          accepts: [{arg: 'artistid', type: 'number'}, {arg: 'albumid', type: 'number'}, {arg: 'title', type: 'string'}],
          returns: {arg: 'Track', type: 'object'}
        }
    );
};