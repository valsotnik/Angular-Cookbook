# How it works...

A template reference variable is often a reference to a DOM element within a template.
It can also refer to a directive (which contains a component), an element, `TemplateRef`, or a web component (source: https://angular.io/guide/template- reference-variables).
In essence, we can refer to our `<app-gallery>` component, which behind the scenes is a directive in Angular. Once we have the variable in our template, we pass the reference to the functions in our component as function arguments. Then, we can access the properties and the methods of `GalleryComponent` from there.
You can see that we are able to add and remove items from the pictures array that resides in `GalleryComponent` directly from `AppComponent`, which is the parent component in this entire flow.

# CcTemplateVars

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
