# How it works...

Structural directives in Angular are special for multiple reasons.
First, they allow you to manipulate DOM elements — that is, adding/removing/manipulating based on your needs.
Moreover, they have this `*` prefix that binds to all the magic Angular does behind the scenes.
As an example, `*ngIf` and `*ngFor` are both structural directives that behind the scenes work with the `<ng-template>` directive containing the content you bind the directive to and create the required variables/properties for you in the scope of `ng-template`.
In the recipe, we do the same. We use the `TemplateRef` service to access the `<ng-template>` directive that Angular creates for us behind the scenes, containing the host element on which our `appIfNot` directive is applied. Then, based on the value provided to the directive as input, we decide whether to add the magical `ng-template` to the view or clear the `ViewContainerRef` service to remove anything inside it.

# NgIfNotDirective

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
