import {computedFrom} from 'aurelia-framework';
import {Album} from './album';
export class Event {
	constructor(data) {
		Object.assign(this, data);
		this.viewAttributes = false;
		this.CreateDate = this.CreateDate || Date.now(); 
		this.track[0].album = new Album(this.track[0].album);
		this.hue = 240 + (this.track[0].audio.valence ? this.track[0].audio.valence * 100 : 0); // blue is 240, so anything higher gets redder
		this.saturation = (this.track[0].audio.valence ? this.track[0].audio.valence * 100 : 0) + "%"; // 
		this.lightness = (this.track[0].audio.valence ? this.track[0].audio.valence * 100 : 0) + "%"; //;
		this.alpha = (this.track[0].audio.loudness ? Math.pow(10, this.track[0].audio.loudness / 20) : 0);
		this.bpm = (this.track[0].audio.tempo ? 120000 / this.track[0].audio.tempo : 1000) + "ms";
		this.opacity = (this.track[0].audio.danceability ? this.track[0].audio.danceability : 0.5);
	}
	
	
}