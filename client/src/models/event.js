export class Event {
	constructor(data) {
		Object.assign(this, data);
		this.viewAttributes = false;
	}
	
	toggleTrackAttributes() {
    	this.viewAttributes = !this.viewAttributes;
  	}
}