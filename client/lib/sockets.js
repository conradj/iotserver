import DisplayRoom from './display-room'
    
class Sockets {
    constructor() {
        this.socket = io()
    }
    
    start() {
        this.socket.on('roommsg', function(room){
            DisplayRoom(room)
        })
        
        this.socket.on('eventmsg', function(message){
            //alert(message.text)
            console.log(message);
            document.getElementById("event-messages").innerHTML += message.text;
        })
        
        this.socket.on('toastmsg', function(vm){
            //alert(message.text)
            console.log(vm);
            //document.getElementById("event-messages").innerHTML += vm.album.Title;
        })
        
        this.socket.on('scrobble', function(scrobble) {
            //Room.Scrobble(scrobble);
            //TrackGraph.Update(scrobble);
        })
    }
}

export default new Sockets()