# How it works

Whenever we try to inject a service somewhere, by default, it tries to find a service inside the associated module of where you're injecting the service.
When we use `providedIn: 'root'` to declare a service, whenever the service is injected anywhere in the app, Angular knows that it simply has to find the service definition in the root module and not in the feature modules or anywhere else.
However, you have to make sure that the service is only provided once in the entire application. If you provide it in multiple modules, then even with `providedIn: 'root'`, you'll have multiple instances of the service.
To avoid providing a service in multiple modules or at multiple places in the app, we can use the `@SkipSelf()` decorator with the `@Optional()` decorator in the services' constructor to check whether the service has already been provided in the app.

# NgSingletonService

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
