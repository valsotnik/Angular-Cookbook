# How it works...

Angular provides a great way to implement our own custom preloading strategy for our feature modules. We can decide easily which modules should be preloaded
and which should not. In the recipe, we learned a very simple way to configure the preloading using the data object of the routes configuration by adding a property
named `shouldPreload`. We created our own custom preload strategy service named `CustomPreloadStrategyService`, which implements the `PreloadingStrategy` interface from the `@angular/router` package. The idea is to use the preload method from the `PreloadingStrategy` interface, which allows us to decide whether a route should be preloaded. That's because Angular goes through each route using our custom preload strategy and decides which routes to preload. And that's it. We can now assign
the `shouldPreload` property in the data object to any route we want to preload on app start.

# RoutePreloadingStrategies

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
