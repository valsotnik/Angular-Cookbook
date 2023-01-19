# How it works...

`Stagger` animations only work inside `query` methods. This is because of the fact that staggering animations usually are applied to the list itself and not to individual items.
In order to search or `query` the items, we first use the `query` method. Then we use the `stagger` method to define how many milliseconds of staggering we want before the animation starts for the next list item.
We also provide animation as well in the `stagger` method to define the animation for each element found with the query.
Notice that we're using `{ optional: true }` for both the `:enter` query and the `:leave` query. This is because if the list binding changes (`bucket.length`), we don't get an error if no new element has entered the DOM or no element has left the DOM.

# AnimatingLists

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
