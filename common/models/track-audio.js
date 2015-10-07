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
    
    TrackAudio.findOrCreateSearch = function(artistName, trackId, trackTitle) {
        return TrackAudio.findOneAsync({ where: { id: trackId } })
        .then(function(trackAudio) {
            TrackAudio.app.io.emit('eventmsg', {text: "trackaudiofind" });
            if(trackAudio) {
                TrackAudio.app.io.emit('eventmsg', {text: "trackaudiofound" });
                /// TODO check CheckedDate and update if it hasn't been checked for a while
                return trackAudio;
            } else {
                return TrackAudio.createAttributes(artistName, trackId, trackTitle)
            }
            TrackAudio.app.io.emit('eventmsg', {text: "waah" });
        });
    }
    
    TrackAudio.createAttributes = function(artistName, trackId, trackTitle) {
        return TrackAudio.app.dataSources.echonest.search(artistName, trackTitle)
        .then(function(json, context) {
            var audio_summary,
                trackAudio;

            trackAudio = {
                id: trackId
            };

            TrackAudio.app.io.emit('eventmsg', {text: "Echonested new new" });
                //response object returned has an object called "response" *sigh*
            if(json.response.songs.length > 0) {
                audio_summary = json.response.songs[0].audio_summary;
                trackAudio =
                {
                    id: trackId,
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
            TrackAudio.app.io.emit('eventmsg', {text: "about to save track audio" });
            return TrackAudio.app.models.TrackAudio.createAsync(trackAudio);
        });
    }
};