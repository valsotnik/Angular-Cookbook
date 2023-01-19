# How it works...

`BehaviorSubject` is a special type of `Observable` that requires an initial value and can be used by many subscribers. In this recipe, we create a `BehaviorSubject` and then create an `Observable` using the `.asObservable()` method on `BehaviorSubject`. Although we could've just used `BehaviorSubject`, using the `.asObservable()` approach is recommended by the community.
Once we have created the `Observable` named `count$` in `NotificationsService`, we inject `NotificationsService` in our components and assign the `count$` Observable to a local property of the components. Then, we subscribe to this local property (which is an Observable) directly in `NotificationsButtonComponent's` template (html) and in `NotificationsManagerComponent's` template using the `async` pipes.
Then, whenever we need to update the value of the `count$` Observable, we use
the `setCount` method of `NotificationsService` to update the actual `BehaviorSubject's` value by using the `.next()` method on it. This automatically emits this new value via the `count$` Observable and updates the view with the new value in both of the components.

# CcServices

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
