# How it works...

The beauty of reactive forms is that they provide much more flexibility than the regular `ngModel` binding or even template-driven forms. And for each form control, we can subscribe to its `valueChanges` Observable, which receives a new value whenever the input is changed.
So, instead of relying on the Submit button's click, we subscribed directly to the `valueChanges` property of each form control.
In a regular scenario, that would result in four different streams for four inputs, which means we would have four subscriptions that we need to take care of and make sure we unsubscribe them. This is where the `combineLatest` operator comes into play.
We used the `combineLatest` operator to combine those four streams into one, which means we needed to unsubscribe only one stream on component destruction. But hey! Remember that we don't need to do this if we use the `async` pipe? That's exactly what we did. We removed the subscription from the `home.component.ts` file and used the `.pipe()` method with the `.map()` operator. The `.map()` operator transformed the data to our needs, and then returned the transformed data to be set to the `boxStyles$` Observable. Finally, we used the `async` pipe in our template to subscribe to the `boxStyles$` Observable and assigned its value as the [ngStyle] to our box element.

# UsingCombinelatestOperator

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
