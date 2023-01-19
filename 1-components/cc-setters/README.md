# How it works...

Getters and setters are components of a built-in feature of JavaScript. Many developers have used them in their projects while using vanilla JavaScript, or even TypeScript.
Fortunately, Angular's `@Input()` can also use getters and setters since they're basically a property of the provided class.
For this recipe, we use a getter and, more specifically, a setter for our input so whenever the input changes, we use the setter method to do additional tasks. Moreover, we use the setter of the same input in our HTML so we directly show the value in the view when updated.
It is always a good idea to use a private variable/property with getters and setters to have a separation of concerns on what the component receives as input and what it stores in itself separately.

# CcSetters

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
