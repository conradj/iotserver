import {computedFrom} from 'aurelia-framework';

export class Album {
	constructor(data) {
		Object.assign(this, data);
	}
	
	@computedFrom('coverUrl')
	get thumbnail() {
		return this.coverUrl ? this.coverUrl : '';
	}
}