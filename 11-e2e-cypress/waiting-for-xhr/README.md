# How it works...

In the recipe, we use something called variable aliasing. We first use the `cy.intercept()` method so that Cypress can listen to the network call. Note that
we use a wildcard for the URL by using `https://api.randomuser.me/*` as the parameter, and then we use a `.as('searchUsers')` statement to give an alias for this interception.

Then, we use the `cy.wait('@searchUsers');` statement, using the `searchUsers` alias to inform Cypress that it has to wait until the aliased interception happens—that is, until the network call is made, regardless of how long it takes. This makes our tests pass, even though the regular 4,000 ms Cypress timeout has already passed before actually getting the network call. Magic, isn't it?

# SettingUpJest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.3.

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
