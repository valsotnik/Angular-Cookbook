# How it works...

The `Angular CDK` provides the `Scrolling` APIs, which include the `*cdkVirtualFor` directive and the `<cdk-virtual-scroll-viewport>` element. It is necessary
to have `<cdk-virtual-scroll-viewport>` wrapping the element that has the `*cdkVirtualFor` directive being applied to it. Notice that we have an attribute on the `cdk-virtual-scroll-viewport` element named `[itemSize]`, having its value set to "`110`". The reason for this is that each list item has a height of approximately `110` pixels.
But how does it improve the rendering performance? Glad you asked! In the original code for this recipe, when we loaded the 10,000 users, it would create a separate `<div>` element with the `class="list__item list-group-item"` attribute for each user, thus creating 10,000 DOM elements all being rendered at once. With virtual scroll in place, the CDK only creates a few `<div>` elements, renders them, and just replaces the content of those few `<div>` elements as we scroll through items.
Since we only have a few elements rendered on the DOM, we don't have performance issues anymore, and the hover animation also seems super-smooth now.

When implementing virtual scroll in your own applications, make sure that you set a specific height to the `<cdk-virtual-scroll viewport>` element, and also set the `[itemSize]` attribute equal to the expected list- item height in pixels, otherwise the list won't show.

# UsingCdkVirtualScroll

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
