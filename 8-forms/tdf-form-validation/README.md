# How it works...

The core components of this recipe were the `ngForm` and `ngModel` directives. We could easily identify whether the submit button should be clickable (not disabled) or not based on whether the form is valid, that is, if all the inputs in the form have valid values. Note that we used the template variable created using the `#releaseForm="ngForm"` syntax on the `<form>` element. This is possible due to the ability of the `ngForm` directive to be exported into a template variable. Therefore, we were able to use the `releaseForm`. invalid property in the `[disabled]` binding of the submit button to conditionally disable it.
We also showed the errors on individual inputs based on the condition that the input might be invalid. In this case, we show the Bootstrap alert element ( a <div> with the CSS class alert). We also use Angular's provided classes, `ng-valid` and `ng-invalid`, on the form inputs to highlight the input in a certain way depending on the validity of the input's value. What's interesting about this recipe is that we validated the app name's input by making sure it contains a non-falsy value where the first `<option>` of the `<select>` box has the value `""`.
And what's even more fun is that we also validated the version name right when the user types it using the `[pattern]` binding on the input to a regex. Otherwise, we'd have to wait for the user to submit the form, and then it would have been validated. Thus, we're providing a great user experience by providing the errors as the user types the version.

# TdfFormValidation

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
