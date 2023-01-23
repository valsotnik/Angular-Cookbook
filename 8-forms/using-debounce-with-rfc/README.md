# How it works...

The main task for the recipe was quite easy. We just used the `debounceTime` operator from the rxjs package and used it with our Reactive form control's .`valueChanges` Observable. Since we're using it within the `.pipe()` operator before the `.subscribe()` method, every time we change the value of the input, either by entering a value or by pressing the backspace key, it waits for 300ms according to the `searchDebounceTime` property and then calls the `searchUsers()` method.
We also wrote some tests in this recipe. Notice that we spy on the `searchUsers()` method since that is what it's supposed to be called whenever we change the value of the 'username' form control. We're wrapping the test functions inside the `fakeAsync` method so we can control the asynchronous behavior of the use cases in our tests. We then set the value of the form control using the `FormControl.setValue()` method, which should trigger the method provided as an argument to the .`subscribe()` method after the time according to `searchDebounceTime` has passed. We then used the `tick()` method with the value of `searchDebounceTime` so it simulates an asynchronous passage of time. Then we write our `expect()` block to check whether the `searchUsers()` method should or shouldn't have been called. Finally, at the end of the tests, we use the `discardPeriodicTasks()` method. We use this method so that we don't face the Error: 1 periodic timer(s) still in the queue. error and our tests work.

# UsingDebounceWithRfc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

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
