# How it works...

Cypress can be integrated with absolutely any framework and web development project. One interesting fact is that Cypress uses Mocha as the test runner behind the scenes.
The tooling for Cypress watches for code changes so that you don't have to recompile the tests time and time again. Cypress also adds a shell around the application being tested to capture logs and access DOM elements during the tests, and some functionality for debugging tests.
At the very top of our `app.spec.js` file, we use the `context()` method that defines the test suite, basically defining the context of the tests about to be written inside. Then, we use a `beforeEach()` method to specify what should happen before each test is executed. Since each test starts with no data, we first have to make sure that Cypress navigates to our application's `http://localhost:4200` Uniform Resource Locator (URL). The reason we just specify `cy.visit('/')` and it still works is that we have already specified the baseUrl property in the cypress.json file. Therefore, we just have to provide relative URLs in our tests.
Finally, we use the `it()` method to specify the titles for our first test, and then we use the `cy.title()` method, which is a handy helper, to fetch the text value of the Title of our HyperText Markup Language (HTML) page currently being rendered. We use the 'eq' operator to check its value against the 'Writing your first Cypress test' string, and it all works!

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
