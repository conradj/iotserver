import DisplayRoom from './display-room'
    
class Sockets {
    constructor() {
        this.socket = io()
    }
    
    start() {
        this.socket.on('roommsg', function(room){
            DisplayRoom(room)
        })
    }
}

export default new Sockets()