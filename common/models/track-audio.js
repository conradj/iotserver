var Promise = require("bluebird");

module.exports = function(TrackAudio) {	
    // once a model is attached to the data source
    TrackAudio.on('dataSourceAttached', function( obj ){
        // wrap the whole model in Promise
        // but we need to avoid 'validate' method 
        TrackAudio = Promise.promisifyAll( TrackAudio, 
            {filter: function(name, func, target){
                return !( name == 'validate');
            }} 
        );
    });
    
    TrackAudio.getAttributes = function(artistName, trackId, trackTitle) {
        var echoNestSearchAsync = Promise.promisify(TrackAudio.app.dataSources.echonest.search);
        // this also gets the musicbrainz artist ID
        return echoNestSearchAsync(artistName, trackTitle, "audio_summary", "tracks", "id:musicbrainz")
        .then(function(json, context) {
            return TrackAudio.parse(json[0].response);
        });
    }
    
    // need to move these out
    TrackAudio.parse = function(echonestresults) {
        var songResults,
            audio_summary,
            echonest = {
                artistmusicbrainzId: '',
                trackAudio: {}
            };
        
        songResults = echonestresults.songs;
        if(songResults.length > 0) {
            if(songResults[0].artist_foreign_ids.length > 0) {
                // foreign_id = musicbrainz:artist:ea4dfa26-f633-4da6-a52a-f49ea4897b58
                echonest.artistmusicbrainzId = songResults[0].artist_foreign_ids[0].foreign_id.split(':')[2];
            }    
            
            audio_summary = songResults[0].audio_summary;
            echonest.trackAudio =
            {
                key: audio_summary.key,
                analysisURL: audio_summary.analysis_url,
                energy: audio_summary.energy,
                liveness: audio_summary.liveness,
                tempo: audio_summary.tempo,
                speechiness: audio_summary.speechiness,
                acousticness: audio_summary.acousticness,
                instrumentalness: audio_summary.instrumentalness,
                mode: audio_summary.mode,
                time_signature: audio_summary.time_signature,
                duration: audio_summary.duration,
                loudness: audio_summary.loudness,
                audio_md5: audio_summary.audio_md5,
                valence: audio_summary.valence,
                danceability: audio_summary.danceability
            }
        }
        
        return echonest;
    }
};