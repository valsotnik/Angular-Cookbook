# How it works...

When we use the `--routing` argument while creating the app, or when creating a module, the Angular CLI automatically creates a module file named `<your module>` - `routing.module.ts`. This file basically contains a routing module.
In this recipe, we just created the feature modules without routing to keep the implementation simpler and faster. In the next recipe, you'll learn about routes within modules as well. Anyway, since we've created the eagerly loaded feature modules, this means that all the JavaScript of all the feature modules loads as soon as the app is loaded. You can inspect the Network tab in Chrome DevTools and see the content of the `main.js` file since it contains all
our components and modules.
Since we've established that all our components in the recipe are loaded eagerly on the app start, it is necessary to understand that it happens because we import `HomeModule` and `AboutModule` in the imports array of `AppModule`.

# BasicRoutingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
