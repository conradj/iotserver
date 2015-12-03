import {computedFrom} from 'aurelia-framework';

export class Album {
	constructor(data) {
		Object.assign(this, data);	
	}
	
	@computedFrom('musicbrainzId')
	get thumbnail() {
		if(!this.musicbrainzId) {
			return "";
		} else {
			return `http://www.coverartarchive.com/release-group/${this.musicbrainzId}/front-250`;
		}
	}
}