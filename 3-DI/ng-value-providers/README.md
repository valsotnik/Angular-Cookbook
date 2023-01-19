# How it works

When we inject a token into a component, Angular tries to find the resolved value of the token from the injected place by moving up the hierarchy of components and modules.
We provided `EmployeeConfig` as `APP_CONFIG` in `EmployeeModule`. When Angular tries to resolve its value for `BucketComponent`, it finds it early at `EmployeeModule` as `EmployeeConfig`.
Therefore, Angular stops right there and doesn't reach `AppComponent`. Notice that the value for `APP_CONFIG` in `AppComponent` is the `AppConfig` constant.

# NgValueProviders

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
