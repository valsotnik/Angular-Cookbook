# How it works...

`@ngrx/router-store` is an amazing package that does a lot of magic to make our development a lot easier with NgRx.
You saw how we could remove the `ActivatedRoute` service completely from the `UserDetailComponent` class by using the selectors from the package.
Essentially, this helped us get the route params right in the selectors, and we could use it in our selectors to get and filter out the appropriate data. Behind the scenes, the package listens to the route changes in the entire Angular app and fetches from the route itself.
It then stores the respective information in the NgRx Store so that it remains in the Redux state and can be selected via the package - provided selectors easily. In my opinion, it's freaking awesome! I say this because the package is doing all the heavy lifting that we would have to do otherwise. As a result, our `UserDetailComponent` class now relies only on the Store service, which makes it even easier to test because of fewer dependencies.

# NgrxRouterStore

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
