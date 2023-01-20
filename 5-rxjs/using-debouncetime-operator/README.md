# How it works...

The `debounceTime` operator waits for a particular time before emitting a value from the source Observable, and that too only when there's no more source emission at hand. This allows us to use the operator on the input's `valueChanges` Observable. When you type something in the input, the `debounceTime` operator waits for 300ms to see if you're still typing. And if you've not typed for those 300ms, it moves forward with the emission, causing the HTTP call at the end.

# UsingDebouncetimeOperator

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
