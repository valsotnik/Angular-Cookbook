# How it works...

When an animation is registered with Angular using the `trigger` method, Angular itself creates a local property within the scope with the name of the trigger
set as `@triggerName`. It also creates the `.start` and `.done` sub-properties as `EventEmitter` instances for the animation.
Therefore, we can easily use them in the templates to capture the `AnimationEvent` instance passed by Angular. Each `AnimationEvent` contains the `phaseName` property, using which we can also identify whether it is the start event or the done event. We can also tell from `AnimationEvent` which state the animation started from and which state it ended on.

# AnimationCallbacks

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
