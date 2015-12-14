import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';
import {bindable} from 'aurelia-framework';

@inject(HttpClient)
export class Locations {
  @bindable locations = null;
  locations = [];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('api/');
    });

    this.http = http;
    
    this.http.fetch('locations?filter[order]=order%20ASC')
      .then(response => response.json())
      .then(locations => this.locations = locations);
  }
}
