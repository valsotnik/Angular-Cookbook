# How it works...

Since we wanted to implement a 3D animation in this recipe, we first made sure that the animation host element had a value for the perspective style, so we can see all the magic in 3D.
Then we defined our animations using the `keyframes` method with an animation state for each offset so we could set different angles and rotations at those states, just so it all looks cool. One important thing that we did was group our `:enter` and `:leave` queries using the group method, where we defined the animations. This made sure that we had the route entering and leaving the view simultaneously.

# ComplexRouteAnimations

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
