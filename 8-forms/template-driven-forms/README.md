# How it works...

The key to using template-driven forms in Angular resides in `FormsModule`, the `ngForm` directive, by creating a template variable using the `ngForm` directive and
using the `[(ngModel)]` two-way data binding along with the name attributes for inputs in the template.
We began by creating a simple form with some inputs. Then, we added the `FormsModule`, which is necessary for using the `ngForm` directive and the `[(ngModel)]` two-way data binding.
Once we added the module, we could use both the directive and the data binding with our newly created local property named `newLog` in the `ReleaseFormComponent`. Notice that it could be an instance of the `ReleaseLog` class, but we kept it as an object of the `IReleaseLog` type instead because we don't want the `ReleaseLog` class's message property as we don't use it.
With the `[(ngModel)]` usages and the `#releaseForm` template variable in place, we could submit the form using the `ngSubmit` emitter of Angular's `<form>` directive. Notice that we pass the `releaseForm` variable to the `formSubmit` method, which makes it easier to test the functionality for us. Upon submitting the form, we use the form's value to create a new `ReleaseLog` item and we emit it using the `newReleaseLog` output emitter. Notice that if you provide an invalid version for the new release log, the app will throw an error and will not create a release log. This is because we validate the version in the constructor of the `ReleaseLog` class. Finally, when this `newReleaseLog` event is captured by `VersionControlComponent`, it calls the `addNewReleaseLog` method, which adds our newly created release log to the `releaseLogs` array. And since the `releaseLogs` array is passed as an `@Input()` to `ReleaseLogsComponent`, it immediately shows it right away.

# TemplateDrivenForms

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
