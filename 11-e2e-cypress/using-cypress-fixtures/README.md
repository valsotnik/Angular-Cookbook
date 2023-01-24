# How it works...

We use fixtures in a Cypress test using the c`y.fixture()` method, which allows us to use data from a file. In this recipe, we use fixtures for the HTTP call that gets the user data and for the images. But how does it work? Essentially, the fixture method has four overloads, as follows:
`cy.fixture(filePath)
cy.fixture(filePath, encoding)
cy.fixture(filePath, options)
cy.fixture(filePath, encoding, options)`

The filePath parameter takes a string as the file path relative to the Fixture folder, which defaults to the cypress/fixture path, although we can provide a different Fixture folder by defining a fixturesFolder property in the cypress.json configuration file. Notice that for the HTTP call, we use the cy.fixture('users.json') statement, which essentially points to the cypress/fixture/users.json file.
First of all, we use the cy.fixture('users.json') method before the cy.visit() method to ensure that our immediate XHR call that triggers on launching the application uses the fixture. If you change the code otherwise, you'll see that it doesn't work as expected. We then use the .then() method to get hold of the data from the users.json file. Once we get the data (response) object, we use the cy.intercept() method using a Minimatch glob pattern to intercept the HTTP
call to get the users' data, and we provide this response object from the fixture as
the response for the HTTP call. As a result, all the calls made to the endpoint matching the 'https://api.randomuser.me/*' glob use our fixture—that is, the users. json file.
We also do one more interesting thing in the recipe, and that is mocking the images to avoid fetching them from their original source. This is super-handy when you use a third- party API and you have to pay for each call made to the API. We already have the fixture images stored in the cypress/fixture/images folder. Therefore, we loop over the API_USERS array for each user and extract the filename (the imageName variable). We then intercept each HTTP call done to fetch the images and use the fixture image instead of the original resource in our tests.

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
