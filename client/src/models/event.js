import moment from 'moment';

export class Event {
	constructor(data) {
		Object.assign(this, data);
		this.playedFromNow = moment(this.CreateDate).fromNow();
	}
}