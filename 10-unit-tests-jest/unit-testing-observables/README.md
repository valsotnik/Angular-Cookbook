# How it works...

We start our recipe by using the `fakeAsync()` and `tick()` methods from the '`@angular/core/testing`' package. Notice that we wrap our tests' callback method using the `fakeAsync()` method. The method wrapped in the `fakeAsync()` method is executed in something called a `fakeAsync` zone. This is contrary to how it works in the actual Angular application, which runs inside `ngZone`.
Important note: In order to work with the `fakeAsync` zone, we need to import the zone. `js/dist/zone-testing` library in our test environment. This is usually done in the `src/test.ts` file when you create an Angular project. However, since we migrated to Jest, we removed that file.
"Okay. How does it work then, Ahsan?" Well, I'm glad you asked. While setting up for Jest, we use the jest-preset-angular package. This package ultimately requires all the necessary files for the fakeAsync tests.
Essentially, the `tick()` method simulates the passage of time in this virtual `fakeAsync` zone until all of the asynchronous tasks are finished. It takes a parameter as milliseconds, which either reflects how many milliseconds have passed or how much the virtual clock has advanced. In our case, we use 500 milliseconds as the value for the `tick()` method.
Notice that we're mocking `UserService` for the tests for `UsersComponent`. Specifically for 'should get users back from the API component init', we call the component.ngOnInit() method in the test and then call the `tick()` method. In the meantime, the `ngOnInit()` method calls the `searchUsers()` method, which calls the `UserServiceMock.searchUsers()` method since we've provided it as the `useClass` property in our test environment for `UserService`. Finally,
that returns the value of the `DUMMY_USERS` array that we have defined in the user. `service.mock.ts` file. The other test for the `UsersComponent`, that is, 'should get the searched users from the API upon searching', is quite similar as well.
In terms of the tests for `UserDetailComponent`, we do something different, that is,
we also have to mock the `activatedRoute` service. Why? Well, that is because the `UserDetailComponent` is a page that can be navigated with a `uuid` and because its path is defined as `'/users/:uuid'` in the `app-routing.module.ts` file. Therefore, we need to populate this `uuid` parameter in our tests to work with the `DUMMY_USERS` array. For this, we use the `ActivatedRouteMock` class inside the **mocks** folder. Notice that it has a `setParamMap()` method. This allows us to specify the uuid parameter in our tests. Then, when the actual code subscribes to the `this.route. paramMap` Observable, our set uuid parameter can be found there.
For the 'should get the user based on routeParams on page load' test, we set the second user's uuid from the `DUMMY_USERS` array as the uuid route parameter's value. Then, we use the `tick()` method, after which we expect the user property to have the second user from the `DUMMY_USERS` array as the value. The other test in the file is also quite similar and self-explanatory. Please refer to the next section for more useful links regarding unit testing scenarios.

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
