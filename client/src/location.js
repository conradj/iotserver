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
      if(this.checkMergeEvent(event, this.events[0], true)) {
        this.events.unshift(new Event(data));
      }
    });
    
    console.log('bind');
    this.loadEvents(0, 10);
    // subscribe
    let subscription = this.bindingEngine.collectionObserver(this.events).subscribe();
    // unsubscribe
    subscription.dispose();
  }
  
  loadEvents(skip, limit) {  
    return this.eventService.getEventsByLocation(this.location.id, skip, limit).then
      (response => response.json()).then
      (events => events.map(
        (event) => {
          let newEvent = new Event(event);
          if(this.checkMergeEvent(newEvent, this.events[this.events.length -1], false)) {
            if(limit - skip < 25) {
              // only get covers for the few load
              this.imageService.manageCoverArt(newEvent.track[0].album);
            }
            this.events.push(newEvent);
          }
          return newEvent;           
        })
      ).then
      (events => events.length == limit ? this.loadEvents(skip+limit, limit) : console.log('finished', this.location.Name))
  }
  
  checkMergeEvent(event, lastEvent, doPush) {
    try {
      if(this.events.length > 0) {
        //let lastEvent = this.events[this.events.length -1];
        console.log('debug', 'checkMergeEvent', lastEvent, event)
        if(lastEvent.track[0].album.Title == event.track[0].album.Title) {
          if(!lastEvent.eventGroup) {
            lastEvent.eventGroup = [];
            lastEvent.eventGroup.push(lastEvent);
          }
          
          // OMG, this is terrible!
          if(doPush) {
            lastEvent.eventGroup.push(event);
          } else {
            lastEvent.eventGroup.unshift(event);
          }
          
          return false;
        }
      }
    } catch(e) {
      console.log('ERROR', 'checkMergeEvent', event, e)
    }
    
    return true;
  }
}