# How it works...

As mentioned earlier, `@ngrx/component-store` is a standalone package that can easily be installed in your Angular apps without having to use `@ngrx/store`, `@ngrx/ effects`, and so on. It is supposed to replace the usage of `BehaviorSubject` in Angular services, and that's what we did in this recipe. We covered how to initialize a `ComponentStore` and how to set the initial state using the `setState` method when we already had the values without accessing the state, and we learned how to create `updater` methods that can be used to update the state, as they can access the state and allow us to even pass arguments for our own use cases.

# NgrxComponentStore

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
