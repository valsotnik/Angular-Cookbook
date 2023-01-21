# How it works...

The recipe begins with having a basic HTML form in our Angular app with no Angular magic bound to it. We first started importing `ReactiveFormsModule`
in the `AppModule`. If you're using the Angular Language Service with the editor of your choice, you might see an error as you import `ReactiveFormsModule` into
the app and don't bind it with a Reactive form, in other words, with a `FormGroup`.
Well, that's what we did. We created a reactive form using the `FormGroup` constructor and created the relevant form controls using the `FormControl` constructor. We then listened to the `ngSubmit` event on the `<form>` element to extract the value of `releaseForm`. Once done, we emitted this value using the `@Ouput()` named `newReleaseLog`. Notice that we also defined the type of the value that this emitter will emit as `IReleaseLog`; it is good practice to define those. This emitter was required because `ReleaseLogsComponent` is a sibling of `ReleaseFormComponent` in the component's hierarchy. Therefore, we're communicating through the parent component, `VersionControlComponent`. Finally, we listen to the `newReleaseLog` event's emission in the `VersionControlComponent` template and add a new log to the `releaseLogs` array via the `addNewReleaseLog` method. And this `releaseLogs` array is being passed to `ReleaseLogsComponent`, which displays all the logs as they're added.

# ReactiveForms

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
