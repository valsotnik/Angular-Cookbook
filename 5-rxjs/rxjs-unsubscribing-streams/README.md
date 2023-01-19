# How it works...

When we create an Observable/stream and we subscribe to it, RxJS automagically adds our provided `.subscribe` method block as a handler to the `Observable`. So, whenever there's a value emitted from the `Observable`, our method is supposed to be called.
The fun part is that Angular doesn't automatically destroy that subscription/handler when the component unmounts or when you have navigated away from the route. That's because the core of Observables is RxJS, not Angular, and therefore it isn't Angular's responsibility to handle it.
Angular provides certain lifecycle methods, and we used the `OnDestroy (ngOnDestroy`) method. This is because when we navigate away from a route, Angular destroys that route, and that's when we would want to unsubscribe from all streams we have subscribed to.

# RxjsUnsubscribingStreams

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
