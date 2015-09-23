import House from './house-model'
import DisplayRooms from './display-rooms'
import Ajax from './ajax'
import Sockets from './sockets'

export function bootstrap() {
    // bootstrap code here
//    Ajax.getJSON('/api/rooms').then(
//        (response) => { console.log(response)});
    /*var myHouse = new House(Ajax.getJSON('/api/rooms'));

    var rooms = [];
    for(let room of myHouse){
        console.log(room)
        rooms.push(room);
    }

    console.log(rooms);
    */
    
    //Ajax.getJSON('/api/rooms')
    Ajax.getJSON('/api/locations')
        .then(DisplayRooms)
        .then(Sockets.start())
}
