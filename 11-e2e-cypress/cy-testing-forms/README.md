# How it works...

Since our app's logic has a rule that the `Submit` button should be disabled until both the email and password inputs have valid values, we check if the button is disabled in our tests. We do this by using the `'be.disabled'` assertion on the `Submit` button, as follows:
`  cy.contains('Submit').should('be.disabled');`
We then `use.type()` method chaining on the `cy.get()` selector to type in both inputs one by one, and check if the button is disabled either when we have an invalid value for any input or no value entered at all.
To perform a successful login, we execute the following code:
`cy.get('#emailInput')
.type('ahsan.ayaz@domain.com')
.get('#passwordInput')
.type('password123');
cy.contains('Submit').click();`
Notice that we get each input and type valid values in them, and then we call the `.click()` method on the Submit button. We then check if the success alert exists using the `'.alert.alert-success'` selector and the `should('be.visible')` assertion.
In cases where we want to check that the success alert has been dismissed on clicking the Close button on the alert or when any of the inputs change, we can't just use the `should('not.be.visible')` assertion. This is because Cypress in this case would expect the alert to be in the DOM but just not be visible, whereas in our case (in our Angular app), the element doesn't even exist in the DOM, so Cypress fails to get it. Therefore, we use the following code to check that the success alert doesn't even exist:
`cy.get('.alert.alert-success').should((domList) => {
expect(domList.length).to.equal(0);
});`
One final interesting thing is when we want to check if error messages for each input show when we type something in either of the inputs and clear the input. In this case, we use the following code:
`cy.get('#emailInput').type('mohsin.ayaz@domain.com').clear().
blur();
cy.get('#emailHelp').should('be.visible');
cy.get('#passwordInput').type('password123').clear().blur();
cy.get('#passwordHelp').should('be.visible');`
The reason we use the `.blur()` method is because when Cypress just clears the input the Angular change detection doesn't take place, which results in the error messages not showing on the view immediately. Since Angular's change detection does monkey- patching on the browser events, we trigger a `.blur()` event on both the inputs to trigger the change detection mechanism. As a result, our error messages show properly.

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
