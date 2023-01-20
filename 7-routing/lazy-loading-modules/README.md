# How it works...

Angular works with modules and usually the features are broken down into modules.
As we know, `AppModule` serves as the entry point for the Angular app and Angular will import and bundle anything that is imported in `AppModule` during the build process, resulting in the `main.js` file. However, if we want to lazy load our routes/feature modules, we need to avoid importing feature modules in `AppModule` directly and use the `loadChildren` method for our routes to load the feature modules instead, on-demand. That's what we did in this recipe. It is important to note that the routes stayed the same in `AppRoutingModule`. However, we had to put `path: ''` in our feature routing modules since that'll combine the route in `AppRoutingModule` and then in the feature routing module to become what's defined in `AppRoutingModule`. That's why our routes were still `'about'` and `'home'`.

# LazyLoadingModules

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
