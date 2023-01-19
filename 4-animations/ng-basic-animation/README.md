# How it works...

Angular provides its own Animation API that allows you to animate any property that the CSS transitions work on.
The benefit is that you can configure them dynamically based on the requirements. We first used the `trigger` method to register the animation with the `states` and `transitions`. We then defined those `states` and t`ransitions` using the `state` and `transition` methods respectively.
And we also saw how to run animations in parallel using the `group` method. If we didn't `group` the animations, they'd run sequentially.
Finally, we applied the `states` using some flags in the component to reflect the changes.

# NgBasicAnimation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.6.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
