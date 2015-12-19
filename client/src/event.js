import {customElement, bindable} from 'aurelia-framework';

@customElement('event')
export class Event {
  @bindable event = {};
    
  constructor() {
    
  }
  
  toggleTrackAttributes() {
    this.event.viewAttributes = !this.event.viewAttributes;
  }
}