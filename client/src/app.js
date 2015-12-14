import {inject, BindingEngine} from 'aurelia-framework';
import {BindingSignaler} from 'aurelia-templating-resources';
import {ImageService} from './image-service';

@inject(ImageService, BindingEngine, BindingSignaler)
export class App {
  constructor(imageService, bindingEngine, signaler) {
    // refresh all bindings with the signal name "tick" every minute:
    setInterval(() => signaler.signal('tick'), 60 * 1000);
    setInterval(() => signaler.signal('cover'), 40 * 1000);
    
    this.imageService = imageService;
    this.bindingEngine = bindingEngine;
    this.covers = imageService.covers;
  }
  
  bind() {
    // subscribe
    let subscription = this.bindingEngine.collectionObserver(this.imageService.covers).subscribe();
    // unsubscribe
    subscription.dispose();
  }
  
  configureRouter(config, router) {
    config.title = 'TotterUp';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'home', nav: true, title: 'Music', settings: { icon: 'fa-music' } },
      { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Reading', settings: { icon: 'fa-quote-right' } },
      { route: 'locations', name: 'locations', moduleId: 'locations', nav: true, title: 'Github locations', settings: { icon: 'fa-heart' } },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Insights', settings: { icon: 'fa-line-chart' } }
    ]);

    this.router = router;
  }
}
