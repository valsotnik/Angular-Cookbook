# How it works...

In the `animations.ts` file, we first defined our animation trigger named `routeAnimation`. Then we made sure that by default, the HTML element to which the trigger is assigned has position: '`relative'` set as a style:
`transition('* <=> *', [
  style({
    position: 'relative'
  }),`

Then we apply the styled position: '`absolute`' to the children, as mentioned, using `:enter` and `:leave` as follows:
`query(':enter, :leave', [
  style({
    position: 'absolute',
    width: '100%'
  })
], {optional: true}),`
This makes sure that these elements, that is, the routes to be loaded, have the position: '`absolute`' style and a full width using width: '`100%`' so they can appear on top of each other. You can always fiddle around by commenting either of the styles to see what happens (at your own risk, though!).
Anyway, once the styles are set, we define what will happen to the route that'll enter the view using the `:enter` query. We set the style to have `opacity: 0` so it seems like the route is fading in:
`query(':enter', [
  style({
    opacity: 0,
  })
], {optional: true}),`
Finally, we defined our route transitions as a combination of two sequential animations, the first for query `:leave` and the second for query `:enter`. For the route leaving the view, we set the opacity to 0 via animation, and for the route entering the view, we set the opacity to 1 via animation as well:
`query(':leave', [
  animate('300ms ease-out', style({ opacity: 0 }))
], {optional: true}),
query(':enter', [
  animate('300ms ease-in', style({ opacity: 1 }))
], {optional: true}),`

# RouteAnimations

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
