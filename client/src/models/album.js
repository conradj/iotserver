import {computedFrom} from 'aurelia-framework';

export class Album {
	constructor(data) {
		Object.assign(this, data);
        this.thumbnail = this.coverUrl ? this.coverUrl : '';
	}
	
	// @computedFrom('coverUrl')
	// get thumbnail() {
	// 	//console.log('coverUrl computed', this.Title, this.coverUrl)
	// 	return this.coverUrl ? this.coverUrl : '';
	// }
}