# How it works...

The `flatMap` operator takes the output from the previous Observable and is supposed to return a new Observable back. This helps us to sequentially execute our HTTP calls to be sure that the data is loaded according to its priority, or our business logic.
Since we wanted to execute the calls whenever a new user is selected, which can happen from the `UserDetailComponent` class itself, we put a `flatMap` operator
on the `route.paramsMap` directly.
Whenever that happens, we first set the `user` and `similarUsers` properties to `null`. "But why?" Well, because if we're on the `UserDetailsComponent` page and we click on any similar user, the page wouldn't change since we're already on it. This means the `user` and `similarUsers` variables will still contain their previous values. And since they'll have values already (that is, they're not null), the loader will not show in that case on tapping any similar user. Smart, right?

Anyways, after assigning the variables to `null`, we return the Observable back from the `this.userService.getUser(userId)` chunk, which results in executing the first HTTP call to get the main user. Then, we use a `pipe` and `flatMap` on the first call's Observable to get the main user, assign it to the `this.user` chunk, and then return the Observable from the second call—that is, the `this.userService. getSimilarUsers(userId)` code. Finally, we use the `.subscribe` method to receive the value from `getSimilarUsers(userId)` and once the value is received, we assign it to `this.similarUsers`.

# UsingFlatmapOperator

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
