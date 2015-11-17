export class Event {
	constructor(data) {
		Object.assign(this, data);
		this.viewAttributes = false;
		this.CreateDate = this.CreateDate || Date.now(); 
	}
	
	toggleTrackAttributes() {
    	this.viewAttributes = !this.viewAttributes;
  	}
}