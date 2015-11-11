import {customElement, bindable, inject} from 'aurelia-framework';
import {EventService} from './event-service';  
import {Event} from './models/event';

@inject(EventService)
@customElement('location')
export class Location {
  @bindable location = {};
  events = [];
    
  constructor(eventService){
    this.eventService = eventService;
  }
  
  bind() {
    return this.eventService.getEventsByLocation(this.location.id).then(response => response.json())
      .then(events => this.events = events.map(function(event) { return new Event(event) }))
      .then(events => console.log(this.events))
  }
}