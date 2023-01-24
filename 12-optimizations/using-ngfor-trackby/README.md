# How it works...

The `*ngFor` directive by default assumes that the object itself is its unique identity, which means that if you just change a property in an object used in the `*ngFor` directive, it won't re-render the template for that object. However, if you provide a new object in its place (different reference in memory), the content for the particular item will re-render. This is what we actually do in this recipe to reproduce the performance-issue content.
In the `data.service.ts` file, we have the following code for the `updateUser()` method:
`return {
...updatedUser,
};`

Notice that we use the object spread operator `( { ... } ) `to return a new object for each item in the array. This tells the `*ngFor` directive to re-render the UI for each item in the `listItems` array in the `TheAmazingListComponent` class. Suppose you send a query to the server to find or filter users. The server could return a response that has 100 users. Out of those 100, about 90 were already rendered on the view, and only 10 are different. Angular, however, would re-render the UI for all the list items because of the following potential reasons (but not limited to these):
• The sorting/placement of the users could have changed.
• The length of the users could have changed.
Now, we want to avoid using the object reference as the unique identifier for each list item. For our use case, we know that each user's email is unique, therefore we use the `trackBy` function to tell Angular to use the user's email as the unique identifier. Now, even if we return a new object for each user after a user update from the `updateUser()` method (as previously shown), Angular doesn't re-render all the list items. This is because the new objects (users) have the same email and Angular uses it to track them.

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
