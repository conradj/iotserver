import {customElement, bindable, inject, bindingEngine} from 'aurelia-framework';
import {EventService} from './event-service';  
import {Event} from './models/event';
import io from 'socket.io-client';

@inject(EventService, bindingEngine)
@customElement('location')
export class Location {
  @bindable location = {};
  events = [];
    
  constructor(eventService, bindingEngine){
    this.eventService = eventService;
  }
  
  bind() {
    let  socket = io('http://localhost:4000');
    socket.on(`event-location-${this.location.id}`, (data) => { 
      this.events.unshift(new Event(data));
    });
    
    // subscribe
    let subscription = bindingEngine.collectionObserver(this.events).subscribe();
    // unsubscribe
    subscription.dispose();
    
    return this.eventService.getEventsByLocation(this.location.id).then(response => response.json())
      .then(events => this.events = events.map(function(event) { return new Event(event) }))
      .then(events => console.log(this.events))
  }
}