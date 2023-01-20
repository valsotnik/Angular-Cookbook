# How it works...

In order for the NgRx effects to work, we needed to install the `@ngrx/effects` package, create an effect, and register it as an array of effects (root effects) in the `AppModule` class. When you create an effect, it has to listen to an action. When an action is dispatched to the store from any component or even from another effect, the registered effect triggers, does the job you want it to do, and is supposed to dispatch another action in return. For API calls, we usually have three actions—that is, the main action, and the following success and failure actions. Ideally, on the success action (and perhaps on the failure action too), you would want to update some of your state variables.

# UsingNgrxEffects

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
