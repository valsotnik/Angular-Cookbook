# How it works...

The Angular CDK provides the `ListKeyManager` class, which allows you to implement keyboard navigation. There are a bunch of techniques we can use with the `ListKeyManager` class, and for this particular recipe, we chose the `FocusKeyManager` class. In order to make it work for a list of items, we need to do the following things:

1. Create a component for each item in the list.
2. Use `ViewChildren()` with `QueryList` in the list component to query all the list-item components.
3. Create a `FocusKeyManager` instance in the list component, providing the type of the list-item component.
4. Add a keyboard listener to the list component and pass the event to the instance of the `FocusKeyManager` class.
   When we define the `listKeyManager` property in the `TheAmazingListComponent` class, we define its type as well by specifying it
   as `FocusKeyManager<TheAmazingListItemComponent>`.
   This makes it easier to understand that our `FocusKeyManager` class is supposed to work with an array of `TheAmazingListItemComponent` elements. Therefore, in the `ngAfterViewInit()` method, we specify `this.listKeyManager = new FocusKeyManager(this.listItemsElements);`, which provides a queried list of `TheAmazingListItemComponent` elements.
   Finally, when we listen to the `window:keydown` event, we take the keydown event received in the handler and provide it to the instance of our `FocusKeyManager` class as `this.listKeyManager.onKeydown(event);`. This tells our `FocusKeyManager` instance which key was pressed and what it has to do.
   Notice that our `TheAmazingListItemComponent` class implements the `FocusableOption` interface, and it also has the `focus()` method, which the `FocusKeyManager` class uses behind the scenes when we press the keyboard arrow- down or arrow-up keys.

# UsingListKeyManager

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
