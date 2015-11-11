import {HttpClient} from 'aurelia-fetch-client';  
import {Event} from './models/event';
import 'fetch';

export class EventService {  
  constructor(){
      this.http = new HttpClient().configure(config => {
        config
          .useStandardConfiguration()
          .withBaseUrl('/api/');
    });
  }
  
  getEventsByLocation(locationId){
    return this.http.fetch('Locations/' + locationId + '/events?filter={%22include%22:{%22track%22:[%22album%22,%20%22artist%22,%20%22audio%22]},%22where%22:{%22EventTypeID%22:%221%22},%22limit%22:10,%22skip%22:0,%22order%22:%22CreateDate%20DESC%22}');
  }
}