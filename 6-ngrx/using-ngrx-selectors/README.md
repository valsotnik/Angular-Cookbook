# How it works...

In this recipe, we already had a reducer and an effect that fetches the third-party API data as users.
We started by creating a selector for the users for the home screen. That was easy — we just needed to create a simple selector. Note that the reducer's state is in the following form:
`app: {
  users: []
}`
That's why we first used `createFeatureSelector` to fetch the app state, and then we used `createSelector` to get the users state.
The hard part was getting the current users and similar users. For that, we created selectors that could take the `uuid` as input. Then, we listened to the `paramMap` in the `UserDetailComponent` class for the `uuid`, and as soon as it changed, we fetched it. We then used it with the selectors by passing the `uuid` into them so that the selectors could filter the current user and similar users.
Finally, we had the issue that if someone lands directly on the `User Detail` page with the `uuid`, they won't see anything because we wouldn't have fetched the users. This is due to the fact that we only fetch the users on the home page, so anyone landing directly on a user's detail page wouldn't cause the effect to be triggered. That's why we created a method named `getUsersIfNecessary` so that it can check the state and fetch the users if they're not already fetched.

# UsingNgrxSelectors

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
