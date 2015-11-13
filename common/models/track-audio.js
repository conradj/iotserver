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
        console.log("$$$ TrackAudio.findOrCreateSearch 1");
        return TrackAudio.findOneAsync({ where: { id: trackId } })
        .then(function(trackAudio) {
            console.log("$$$ trackaudio FIND");
            TrackAudio.app.io.emit('toastmsg', {text: "trackaudiofind" });
            if(trackAudio) {
                console.log("$$$ trackaudio FOUND");
                TrackAudio.app.io.emit('toastmsg', {text: "trackaudiofound" });
                /// TODO check CheckedDate and update if it hasn't been checked for a while
                return trackAudio;
            } else {
                return TrackAudio.createAttributes(artistName, trackId, trackTitle)
            }
            console.log("$$$ trackaudio FOUND");
            TrackAudio.app.io.emit('toastmsg', {text: "waah" });
        });
    }
    
    TrackAudio.createAttributes = function(artistName, trackId, trackTitle) {
        console.log("$$$ TrackAudio.createAttributes 1");
        var echoNestSearchAsync = Promise.promisify(TrackAudio.app.dataSources.echonest.search);
        return echoNestSearchAsync(artistName, trackTitle)
        .then(function(json, context) {
            var songResults,
                audio_summary,
                trackAudio;

            trackAudio = {
                id: trackId
            };
            
            songResults = json[0].response.songs;
            
            console.log("$$$ Echonested new new");       
            TrackAudio.app.io.emit('toastmsg', {text: "Echonested new new" });
                //response object returned has an object called "response" *sigh*
            if(songResults.length > 0) {
                audio_summary = songResults[0].audio_summary;
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
            console.log("$$$ about to save track audio"); 
            TrackAudio.app.io.emit('toastmsg', {text: "about to save track audio" });
            return TrackAudio.app.models.TrackAudio.createAsync(trackAudio);
        });
    }
};