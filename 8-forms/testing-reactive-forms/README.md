# How it works...

Testing Reactive forms doesn't even require importing `ReactiveFormsModule` into the test module as of Angular 10. For all the tests in our recipe, we spied on the `newReleaseLog` emitter's emit event defined in the `ReleaseFormComponent` class. This is because we know that when the inputs are correct, the user should be able to click the submit button, and as a result, inside the `formSubmit` method, the emit method of the `newReleaseLog` emitter will be called. For the test covering the validity of the `'version'` form control, we rely on `formSubmit` to throw an error. This is because we know that an invalid version will cause an error in the constructor of the `ReleaseLog` class when creating a new release log. One interesting thing in this test is that we use the following code:
`expect(() => component.formSubmit(component.releaseForm)).toThrowError(expectedError)`
The interesting thing here is that we needed to call the `formSubmit` method ourselves with `releaseForm`. We couldn't just do it by writing `expect(component. formSubmit(component.releaseForm)).toThrowError(expectedError);` because that would rather call the function directly there and would result in an error. So we need to pass an anonymous function here that `Jasmine` will call and would expect this anonymous function to throw an error. And finally, we make sure that our submit button is enabled or disabled by first getting the button using querySelector on `fixture. nativeElement`. And then we check the disabled attribute on the submit button using `submitButton.hasAttribute('disabled')`.

# TestingReactiveForms

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
