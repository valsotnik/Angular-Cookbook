# How it works...

Angular provides a really easy way to create async validator functions, and they're pretty handy too. In this recipe, we started by creating the validator function named `versionValidator`. Notice that we have an argument named `appNameControl` for the validator function. This is because we want to get the app name for which we are validating the version number.
Also notice that we have the return type set to `AsyncValidatorFn`, which is required by Angular. The validator function is supposed to return an `AsyncValidatorFn`, which means it will return a function (let's call it the inner function), which receives an `AbstractControl` and returns an `Observable` of `ValidatorErrors`. Inside the inner function, we use the `getVersionLog`() method from `VersionService` to fetch the `data.json` file using the `HttpClient` service. Once we get the version from `data.json` for the specific app selected, we compare the version entered in the form with the value from `data.json` to validate the input.
Notice that instead of just returning a `ValidationErrors` object with the `newVersionRequired` property set to true, we actually set it to `previousVersion` so that we can use it later to show it to the user.
After creating the validator function, we attached it to the form control for the version name by using the `FormControl.setAsyncValidators()` method in the `ReleaseFormComponent` class. We then used the validation error named `newVersionRequired` in the template to show the error message, along with the version from the `data.json` file.
We also needed to handle the case that while the validation is in progress, the form control is valid until the validation is finished. This allows us to submit the form while the validation for the version name was in progress. We handle it by hiding the submit button during the validation process by checking whether the value of `FormControl.status` is `'PENDING'`. We hide the submit button in that case and show the Please wait... message in the meantime. Note that we also add some logic in the `formSubmit` method of the `ReleaseFormComponent` class to check whether `FormControl.status` is `'PENDING'` for the version number, in which case, we just do a return;.
One more interesting thing in the recipe is that if we added a valid version number and changed the app, we could still submit the form. We handle that by adding a subscription to `.valueChanges` of the 'app' form control, so whenever that happens, we trigger another validation on the 'version' form control using the .`updateValueAndValidity()` method.

# AsynchronousValidator

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
