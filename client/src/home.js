import {inject, computedFrom, BindingEngine} from 'aurelia-framework';
import {ImageService} from './image-service';

@inject(ImageService, BindingEngine)
export class Home {
  constructor(imageService, bindingEngine) {
    this.imageService = imageService;
    this.bindingEngine = bindingEngine;
    this.counter = 0;
    this.covers = imageService.covers;
  }
  
  bind() {
    // subscribe
    let subscription = this.bindingEngine.collectionObserver(this.imageService.covers).subscribe();
    // unsubscribe
    subscription.dispose();
  }
}
