# How it works...

Angular uses triggers for understanding what state the animation is in. An example syntax looks as follows:
`<div [@animationTriggerName]="expression">...</div>;`
expression can be a valid JavaScript expression, and it evaluates to the name of the state.
In our case, we bind it to the `cardState` property, which either contains `'active'` or `'hovered'`.
Therefore, we end up with three transitions for our cards:
• `void => active` (when the element is added to the DOM and is rendered)
• `active => hovered` (when the mouseenter event triggers on the card)
• `hovered => active` (when the mouseleave event triggers on the card)

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
