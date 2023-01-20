# How it works...

The router service is a very powerful service in Angular. It has a lot of methods as well as Observables that we can use for different tasks in our apps.
For this recipe, we used the `events` Observable. By subscribing to the `events` Observable, we can listen to all the `events` that the `Router` service emits through the Observable. For this recipe, we were only interested in the `NavigationStart`, `NavigationEnd`, `NavigationError`, and `NavigationCancel` events. The `NavigationStart` event is emitted when the router starts navigation.
The `NavigationEnd` event is emitted when the navigation ends successfully.
The `NavigationCancel` event is emitted when the navigation is canceled due to a route guard returning false, or redirects by using `UrlTree` due to some reason. The `NavigationError` event is emitted when there's an error due to any reason during the navigation.
All of these events are of the `Event` type and we can identify the type of the event by checking whether it is an instance of the target event, using the `instanceof` keyword. Notice that since we had the subscription to the `Router. events` property in `AppComponent`, we didn't have to worry about unsubscribing the subscription because there's only one subscription in the app, and `AppComponent` will not be destroyed throughout the life cycle of the app.

# RoutingGlobalLoader

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
