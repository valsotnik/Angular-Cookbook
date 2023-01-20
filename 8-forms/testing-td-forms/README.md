# How it works...

Testing template-driven forms can be a bit of a challenge as it depends on how complex the form is, what use cases you want to test, and how complex those use cases are.
In our recipe, the first thing we did was to include `FormsModule` in the imports of the test file for `ReleaseFormComponent`. This makes sure that the tests know the `ngForm` directive and do not throw relevant errors. For the test with all the successful inputs, we spied on the `newReleaseLog` emitter's emit event defined in the `ReleaseFormComponent` class. This is because we know that when the inputs are correct, the user should be able to click the submit button, and as a result, inside the `formSubmit` method, the emit method of the `newReleaseLog` emitter will be called. Note that we're using `fixture.whenStable()` in each of our tests. This is to make sure that Angular has done the compilation and our `ngForm`, named `#releaseForm`, is ready. For the should disable the submit button when version is incorrect test, we rely on `formSubmit` to throw an error. This is because we know that an invalid version will cause an error in the constructor of the `ReleaseLog` class when creating a new release log. One interesting thing in this test is that we use the following code:
`expect(() => component.formSubmit(component.releaseForm)).toThrowError(expectedError);`
The interesting thing here is that we needed to call the `formSubmit` method ourselves with `releaseForm`. We couldn't just do it by writing `expect(component. formSubmit(component.releaseForm)).toThrowError(expectedError);` because that would rather call the function directly there and would result in the error. So, we need to pass an anonymous function here that Jasmine will call and would expect this anonymous function to throw an error. And finally, we make sure that our submit button is enabled or disabled by first getting the button using a querySelector on fixture. nativeElement. We then check the disabled attribute on the submit button using `submitButton.hasAttribute('disabled')`.

# TestingTdForms

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
