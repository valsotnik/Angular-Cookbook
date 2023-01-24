# How it works...

The `ChangeDetectorRef` service provides a bunch of important methods to control change detection completely. In the recipe, we use the `.detach()` method in the `ngOnInit()` method of the `UsersComponent` class to detach the Angular change- detection mechanism from this component as soon as it is created. As a result, no change detection is triggered on the `UsersComponent` class, nor in any of its children. This is because each Angular component has a change-detection tree in which each component is a node. When we detach a component from the change-detection tree, that component (as a tree node) is detached, and so are its child components (or nodes). By doing this, we end up with absolutely no change detection happening for the `UsersComponent` class. As a result, when we refresh the page nothing is rendered, even after we've got the users from the application programming interface (API) and have got them assigned to the users property inside the `UsersComponent` class. Since we need to show the users on the view, which requires the Angular change-detection mechanism to be triggered, we use the .`detectChanges()` method from the `ChangeDetectorRef` instance, right after we've assigned the users data to the users property. As a result, Angular runs the change-detection mechanism, and we get the user cards shown on the view.
This means that in the entire Users page (that is, on the /users route) the only time the Angular change-detection mechanism would trigger after the `UsersComponent` class has initiated is when we call the `searchUsers()` method, get the data from the API, and assign the result to the users property, thus creating a highly controlled change- detection cycle, resulting in much better performance overall.

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
