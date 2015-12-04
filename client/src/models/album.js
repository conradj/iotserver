import {customElement, inject, computedFrom} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';  
import {AlbumService} from '../album-service';
import 'fetch';

@inject(AlbumService)
export class Album {
	constructor(data, albumService) {
		Object.assign(this, data);	
		this.albumService = albumService;
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