# How it works...

As we know, Angular by default runs change detection on each browser event triggered in the app, and since we're using an `idUsingFactorial()` method in the component template (UI), this function runs each time Angular runs the change-detection mechanism, causing more computation and performance issues. This would also hold `true` if we used a getter instead of a method. Here, we use a method because each unique ID is dependent on the index and we need to pass the index in the method when calling it.
We can take a step back from the initial implementation and think what the method actually does. It takes an input, does some computation, and returns a value based on the input — a classic example of data transformation, and also an example of where you would use a pure function. Luckily, Angular pure pipes are pure functions, and they do trigger change detection unless the input changes.
In the recipe, we move the computation to a newly created Angular pipe. The pipe's `transform()` method receives the value to which we're applying the pipe,
which is the index of each user card in the users array. The pipe then uses the `idUsingFactorial()` method and, ultimately, the `createUniqueId()` method to calculate a random unique ID. When we start typing in the search box, the values for the index do not change. This results in no change detection being triggered until we get back a new set of users as output. Therefore, there is no unnecessary computation run as we type the input into the search box, thus optimizing performance and unblocking the UI thread.

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
