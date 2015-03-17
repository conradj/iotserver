export default class House {

    constructor(...rooms) {
        this.rooms = rooms;
    }

    *[Symbol.iterator]() {
        for(let r of this.rooms) yield r;
    }
}