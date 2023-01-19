# How it works...

`ComponentFactoryResolver` is an Angular service that allows you to resolve components dynamically at runtime. In our recipe, we use the `resolveComponentFactory` method, which accepts a `Component` and returns a `ComponentFactory`. We can always use the `create` method of `ComponentFactory` to create instances of the component.
But in this recipe, we're using `ViewContainerRef's` `createComponent` method, which accepts `ComponentFactory` as an input. It then uses `ComponentFactory` behind the scenes to generate the component and then to add it to the attached `ViewContainerRef`.
Every time you create a component and attach it to `ViewContainerRef`, it'll add a new component to the existing list of elements. For our recipe, we only needed to show one component at a time, that is, either `FBCardComponent` or `TwitterCardComponent`. So that only a single element exists in `ViewContainerRef`, we used the `clear()` method on it before adding an element.

# NgDynamicComponents

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
