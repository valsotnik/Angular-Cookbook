# How it works...

Angular by default uses the Default change-detection strategy — or technically, it is the `ChangeDetectionStrategy.Default` enum from the `@angular/core` package. Since Angular doesn't know about every component we create, it uses the `Default` strategy to not encounter any surprises. But as developers, if we know that a component will not change unless one of its `@Input()` variables changes, we can — and we should — use the `OnPush` change-detection strategy for that component. Why? Because it tells Angular to not run change detection until an `@Input()` variable for the component changes.
This strategy is an absolute winner for presentational components (sometimes called dumb components), which are just supposed to show data using `@Input()` variables/ attributes, and emit `@Output()` events on interactions. These presentational components usually do not hold any business logic such as heavy computation, using services to make HyperText Transfer Protocol (HTTP) calls, and so on. Therefore, it is easier for us to use the OnPush strategy in these components because they would only show different data when any of the `@Input()` attributes from the parent component change.
Since we are now using the `OnPush` strategy on our `UserCardComponent`, it only triggers change detection when we replace the entire array upon searching. This happens after the 300ms debounce (line 28 in the `users.component.ts` file), so we only do it when the user stops typing. So, essentially, before the optimization, the default change detection was triggering on each keypress being a browser event, and now, it doesn't.

Important note:
As you now know that the `OnPush` strategy only triggers the Angular change-detection mechanism when one or more of the `@Input()` bindings changes, this means that if we change a property within the component (`UserCardComponent`), it will not be reflected in the view because the change-detection mechanism won't run in this case, since that property isn't an `@Input()` binding. You would have to mark the component as dirty so that Angular could check the component and run change detection. You'll do this using the `ChangeDetectorRef` service—specifically, with the `.markForCheck()` method.

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
