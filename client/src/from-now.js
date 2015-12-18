import moment from 'moment';

export class FromNowValueConverter {
  toView(date) {
    return moment(date).fromNow();
  }
}