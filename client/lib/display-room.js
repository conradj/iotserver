export default (room) => {

    var roomElement
    // existing or new element
    roomElement = document.querySelector('iot-room[name="' + room.name + '"]') || document.createElement('iot-room')
   
    if(!roomElement.getAttribute("name")) {
        // add new rooms to dom
        document.getElementById('rooms-container').appendChild(roomElement)
    }
    
    roomElement.setAttribute('name', room.name)
    roomElement.setAttribute('volume', room.volume)
    roomElement.setAttribute('mute', room.mute)
}