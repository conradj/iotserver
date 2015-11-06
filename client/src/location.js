import {customElement, bindable, computedFrom, inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
@customElement('location')
export class Location {
    @bindable location = {};
    events = [];
    constructor(http) {
        //this.events = [];
        //let socket = io('localhost');
        this.firstEvent = {};
        console.log("constrs");
        console.log(this.location);
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('/api/');
        });

        this.http = http;
       
        
    }
    
    
    
    test(t) {
        console.log("test");
        //console.log(t[0].track[0].Title);
        console.log("test2");
        console.log(this.events);
        //this.tracks = t;
        console.log("test3");
    }
    
    test1() {
        alert(this.events[0].track[0].Title);
    }
    
    bind() {
        return this.http.fetch('Locations/' + this.location.id + '/events?filter={%22include%22:{%22track%22:[%22album%22,%20%22artist%22]},%22where%22:{%22EventTypeID%22:%221%22},%22limit%22:10,%22skip%22:0,%22order%22:%22CreateDate%20DESC%22}')
            .then(response => response.json())
            .then(events => this.events = events)
            .then(events => console.log(events))
    }
    
    // bind() {
    //     console.log("activate");
    //     console.log(this.location);
    //     
    //     this.http.configure(config => {
    //     config
    //         .useStandardConfiguration()
    //         .withBaseUrl('http://0.0.0.0:3000/api/');
    //     });
    //     
    //     this.http.fetch('Locations/' + this.location.id + '/events?filter={%22include%22:{%22track%22:[%22album%22,%20%22artist%22]},%22where%22:{%22EventTypeID%22:%221%22},%22limit%22:10,%22skip%22:0,%22order%22:%22CreateDate%20DESC%22}')
    //     //this.http.fetch('Albums')
    //     .then(response => response.json())
    //     .then(events => this.events = events)
    //     .then(events => this.firstEvent = this.events[0])
    //     //.then(this.test());
    // }
    
    
}