import {customElement, bindable, inject, BindingEngine} from 'aurelia-framework';

@inject(BindingEngine)
@customElement('event')
export class Event {
  @bindable event = {};
    
  constructor(bindingEngine) {
    this.bindingEngine = bindingEngine;
  }
  
  bind() {
    if(this.event.eventGroup) {
      // subscribe
      let subscription = this.bindingEngine.collectionObserver(this.event.track).subscribe();
      // unsubscribe
      subscription.dispose();
    }
  }
  
  toggleTrackAttributes() {
    this.event.viewAttributes = !this.event.viewAttributes;
  }
}