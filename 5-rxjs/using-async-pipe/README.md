# How it works...

Angular's `async` pipe automatically destroys/unsubscribes the subscription as soon as the component destroys.
This gives us a great opportunity to use it where possible. In the recipe, we basically combined all the streams using the `merge` operator.
The fun part was that for the `streamsOutput$` property, we wanted an Observable of the output array on which we could loop over. However, merging the stream only combines them and emits the latest value emitted by any of the streams.
So, we added a `.pipe()` method with the `.map()` operator to take the latest output out of the combined stream, added it to the `outputStreamData` array for persistence, and returned it from the `.map()` method so that we get the array in the template when we use the `async` pipe.
Fun fact — streams don't emit any value unless they're subscribed to. "But Ahsan, we didn't subscribe to the stream, we just merged and mapped the data. Where's the subscription?" Glad you asked. Angular's async pipe subscribes to the stream itself, which triggers our console.log as well.

# UsingAsyncPipe

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
