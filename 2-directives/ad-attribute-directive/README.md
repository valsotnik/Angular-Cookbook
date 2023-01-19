# How it works...

We create an attribute directive that takes the `highlightText` and `highlightColor` inputs and then listens to the input changes for the `highlightText` input using the `SimpleChanges` application programming interface (API) and the `ngOnChanges` life cycle hook.
First, we make sure to save the original content of the target element by getting the attached element using the `ElementRef` service, using the `.nativeElement`. `innerHTML` on the element, and then saving it to `originalHTML` property of the directive. Then, whenever the input changes, we replace the text with an additional HTML element (a `<span>` element) and add the background color to this `span` element.
We then replace the `innerHTML` property of the target element with this modified version of the content.

# AdAttributeDirective

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
