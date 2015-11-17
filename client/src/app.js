import {inject} from 'aurelia-framework';
import {BindingSignaler} from 'aurelia-templating-resources';

@inject(BindingSignaler)
export class App {
  constructor(signaler) {
    // refresh all bindings with the signal name "tick" every minute:
    setInterval(() => signaler.signal('tick'), 60 * 1000);
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
