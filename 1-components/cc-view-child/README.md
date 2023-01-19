# How it works...

`ViewChild()` is basically a decorator that the `@angular/core` package provides out of the box. It configures a view query for the Angular change detector.
The change detector tries to find the first element matching the query and assigns it to the property associated with the `ViewChild()` decorator.
In our recipe, we create a view child by providing `GalleryComponent` as the query parameter, that is, `ViewChild(GalleryComponent)`. This allows the Angular change detector to find the `<app-gallery>` element inside the `app.component.html` template, and then it assigns it to the gallery property within the `AppComponent` class.
It is important to define the gallery property's type as `GalleryComponent` so we can easily use that in the component later with all the TypeScript magic.
Important note: The view query is executed after the `ngOnInit` life cycle hook and before the `ngAfterViewInit` hook.

# CcViewChild

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
