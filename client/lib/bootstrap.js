import DisplayRooms from './display-rooms'
import Ajax from './ajax'
import Sockets from './sockets'

export function bootstrap() {
    // bootstrap code here
    Ajax.getJSON('http://shiny-shiny-shiny.heruku.com/api/rooms')
        .then(DisplayRooms)
        .then(Sockets.start())
}
