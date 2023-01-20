# How it works...

It all begins when we change our route's path to `user/:userId`. This makes `userId` a required parameter for our route. The other piece of the puzzle is to retrieve this parameter in `UserDetailComponent` and then use it to get the target user, as well as similar users. For that, we use the `ActivatedRoute` service. The `ActivatedRoute` service holds a lot of necessary information about the current route and, therefore, we were able to fetch the current route's `uuid` parameter by subscribing to the `paramMap` Observable, so even if the parameter changes while staying on a user's page, we still execute the necessary operations. Notice that we also create a property named `componentIsAlive`. As you might have seen in our prior recipes, we use it in conjunction with the `takeWhile` operator to automatically unsubscribe from the Observable streams as soon as the user navigates away from the page, or essentially when the component is destroyed.

# WorkingWithRouteParams

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
