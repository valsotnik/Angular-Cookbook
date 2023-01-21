# How it works...

We started the recipe by adding the validators, and Angular has got a bunch of validators out of the box, including `Validators.email`, `Validators.pattern`, and `Validators.required`. We used the required validator with the pattern validator in our recipe for the inputs for the app name and the version, respectively. After that, to show the hints/errors for invalid inputs, we added some conditional styles to show a border-bottom on the inputs. We also added some `<div>` elements with `class="alert alert-danger"`, which are basically `Bootstrap` alerts to show the errors on invalid values for the form controls. Notice that we're using the following pattern to hide the error elements:
`[hidden]="releaseForm.get(CONTROL_NAME).valid || releaseForm.get(CONTROL_NAME).pristine"`
We're using the condition with `.pristine` to make sure that as soon as the user selects the correct input and the input is modified, we hide the error again so that it doesn't show while the user is typing in the input or making another selection. Finally, we made sure that the form cannot even be submitted if the values of the form controls are invalid. We disabled the submit button using `[disabled]="releaseForm.invalid"`.

# ValidatingReactiveForms

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
