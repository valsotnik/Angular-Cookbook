# How it works...

`ngOnChanges` is one of the many life cycle hooks Angular provides out of the box. It triggers even before the `ngOnInit` hook.
So, you get the initial values in the first call and the updated values later on. Whenever any of the inputs change, the `ngOnChanges` callback is triggered with `SimpleChanges` and you can get the previous value, the current value, and a Boolean representing whether this is the first change to the input (that is, the initial value).
When we update the value of the `vName` input in the parent, `ngOnChanges` gets called with the updated value. Then, based on the situation, we add an appropriate log into our logs array and display it on the UI.

# CcNgOnChanges

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
