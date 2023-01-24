# How it works...

At the beginning of the recipe, in our first test we use the `.should('have.length', 0)` assertion. When we use the '`have.length`' assertion, Cypress checks the length property of the DOM elements found using the `cy.get()` method. Another assertion that we use is `.should('be.visible')`, which checks if an element is visible on the DOM. This assertion will pass as long as the element is visible on the screen—that is, none of the parent elements are hidden.
In the later test, we try to hover over the element with the '`.counter`' selector, using `cy.get('.counter').trigger('mouseover');`. This fails our test. Why? Because all the hover workarounds in Cypress eventually lead to triggering the JavaScript events and not affecting the CSS pseudo selectors, and since we have our action buttons (with the `'.counter__actions__action'` selector) shown on the `:hover` (CSS) of the element with the '`.counter`' selector, our tests fail because in the tests our action buttons are not actually shown. To tackle the issue, we use the cypress-real-events package, which has the `.realHover()` method that affects the pseudo selectors and eventually shows our action buttons.

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
