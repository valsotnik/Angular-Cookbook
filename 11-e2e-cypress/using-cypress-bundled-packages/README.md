# How it works...

Cypress bundles jQuery with it and we use it via the `Cypress.$` property. This allows us to perform everything that the jQuery function permits us to. It automatically checks which page is in the view using the `cy.visit()` method, and then queries the document using the provided selector.

Important note: `Cypress.$` can only fetch from the document elements that are available immediately on the DOM. This is great for debugging the DOM using the Chrome DevTools in the Cypress test window. However, it is important to understand that it doesn't have any context about the Angular change detection. Also, you can't query any element that isn't visible on the page right from the beginning, as we experienced following the recipe—that is, it doesn't respect waiting for XHR calls for the elements to be visible.

Cypress also bundles lodash and exposes it via the `Cypress._ object.` In the recipe, we use the `_.get()` method to get the nested properties from the user object. The `_.get()` method takes two parameters: the object, and a string that reflects the path for the properties—for example, we use `_.get(response, 'body.results');`, which essentially returns a value for `response.body.results`. We also use the `_.each()` method to iterate over the arrays in the recipe. Note that we can use any lodash method in our Cypress test and not just the aforementioned methods.
We also used the minimatch package, which Cypress exposes via the Cypress. minimatch object. The minimatch package is great for matching and testing glob patterns against strings. We use it to test the URL after navigating to a user's detail page using a pattern.
Finally, we also use the moment.js package that Cypress exposes via the Cypress. moment object. We use it to make sure the date of birth of each user is shown in the expected format on the view. Easy peasy.

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
