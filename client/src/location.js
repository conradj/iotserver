import {customElement, bindable, inject, BindingEngine} from 'aurelia-framework';
import {EventService} from './event-service';  
import {ImageService} from './image-service';  
import {Event} from './models/event';
import io from 'socket.io-client';

@inject(EventService, BindingEngine, ImageService)
@customElement('location')
export class Location {
  @bindable location = {};
  events = [];
    
  constructor(eventService, bindingEngine, imageService){
    this.eventService = eventService;
    this.imageService = imageService;
    this.bindingEngine = bindingEngine;
  }
  
  bind() {
    let  socket = io();
    socket.on(`event-location-${this.location.id}`, (data) => { 
      let event = new Event(data);
      console.log('scrobble', event.track[0].album);
      this.imageService.manageCoverArt(event.track[0].album, true);
      this.events.unshift(new Event(data));
    });
    
    console.log('bind');
    
    // subscribe
    let subscription = this.bindingEngine.collectionObserver(this.events).subscribe();
    // unsubscribe
    subscription.dispose();
    
    return this.eventService.getEventsByLocation(this.location.id).then
      (response => response.json()).then
      (events => this.events = events.map(
        (event) => {
          let newEvent = new Event(event);
          this.imageService.manageCoverArt(newEvent.track[0].album);
          return newEvent;           
        })
      ).then
      (events => console.log(this.events))
  }
}