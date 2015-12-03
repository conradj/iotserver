import {Album} from './album';
export class Event {
	constructor(data) {
		Object.assign(this, data);
		this.viewAttributes = false;
		this.CreateDate = this.CreateDate || Date.now(); 
		this.track[0].album = new Album(this.track[0].album);
	}
	
	toggleTrackAttributes() {
    	this.viewAttributes = !this.viewAttributes;
  	}
}