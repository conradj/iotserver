// creates an <iot-room> element for each room
import DisplayRoom from './display-room'

export default (rooms) => {
    rooms.map(DisplayRoom)
}