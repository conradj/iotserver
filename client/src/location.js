import {customElement, bindable, inject, BindingEngine} from 'aurelia-framework';
import {EventService} from './event-service';  
import {Event} from './models/event';
import io from 'socket.io-client';

@inject(EventService, BindingEngine)
@customElement('location')
export class Location {
  @bindable location = {};
  events = [];
    
  constructor(eventService, bindingEngine){
    this.eventService = eventService;
    this.bindingEngine = bindingEngine;
  }
  
  bind() {
    let  socket = io();
    socket.on(`event-location-${this.location.id}`, (data) => { 
      this.events.unshift(new Event(data));
    });
    
    // subscribe
    let subscription = this.bindingEngine.collectionObserver(this.events).subscribe();
    // unsubscribe
    subscription.dispose();
    
    return this.eventService.getEventsByLocation(this.location.id).then(response => response.json())
      .then(events => this.events = events.map(function(event) { return new Event(event) }))
      .then(events => console.log(this.events))
  }
}