# How it works...

The essence of this recipe is the web API that we're using within an Angular directive, and that is `Element.scrollIntoView()`.
We first attach our `appScrollTo` directive to the elements that should trigger scrolling upon clicking them.
We also specify which element to scroll to by using the target input for each directive attached.
Then, we implement the click handler inside the directive with the `scrollIntoView()` method to scroll to a particular target, and to use a smooth animation while scrolling, we pass the `{behavior: 'smooth'}` object as an argument to the `scrollIntoView()` method.

# NgScrollToDirective

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
