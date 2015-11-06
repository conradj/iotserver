import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';
import {bindable} from 'aurelia-framework';

@inject(HttpClient)
export class Locations {
  @bindable locations = null;
  heading = 'Location';
  locations = [];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('api/');
    });

    this.http = http;
    
    console.log("activas");
    this.http.fetch('locations')
      .then(response => response.json())
      .then(locations => this.locations = locations)
      .then(console.log("activasdsd"));
  }
}
