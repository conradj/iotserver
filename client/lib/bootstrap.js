import DisplayRooms from './display-rooms'
import Ajax from './ajax'
import Sockets from './sockets'

export function bootstrap() {
    // bootstrap code here
    Ajax.getJSON('http://192.168.1.61:3000/api/rooms')
        .then(DisplayRooms)
        .then(Sockets.start())
}