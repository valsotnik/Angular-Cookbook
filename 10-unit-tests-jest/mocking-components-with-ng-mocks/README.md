# How it works...

There are a couple of interesting things that we have covered in this recipe. First of all, to avoid any errors on the console complaining about unknown components, we use the `MockComponent` method from the `ng-mocks` package, to declare the components we're dependent on, as mocks. That is absolutely the simplest thing we achieve with the `ng-mocks` package. However, we do move on to an advanced situation, which I will admit is sort of an unconventional approach; that is testing the `@Input` and `@Output` emitters of the child components in the parent component in order to test an entire flow. This is what we do for the tests of `VersionControlComponent`.
Notice that we remove the usage of the `@angular/core/testing` package completely from the `version-control.component.spec.ts` file. This is because we're no longer using `TestBed` to create the test environment. Instead, we use the `MockBuilder` method from the `ng-mocks` package to build the test environment
for our `VersionControlComponent`. Then, we use the `.mock()` method to mock each child component that we want to work with inside the tests later on. The `.mock()` method is not only used to mock components, but it can also be used to mock services, directives, pipes, and more. Please refer to the next section for further resources to read.
Then, in the 'should add the new log when it is created via ReleaseFormComponent' test, pay attention to the `ngMocks.find()` method, which we use to find the relevant component and get its instance. Its use is relatively similar to what we would do in `TestBed`, as follows:
`fixture.debugElement.query(By.css('app-release-form')).componentInstance`
However, using `ngMocks.find()` is better suited, as it has better support for types. Once we get a hold of the instance of `ReleaseFormComponent`, we use the @ `Output` named `newReleaseLog` to create a new log using the `.emit()` method. Then, we do a quick `fixture.detectChanges()` to trigger the Angular change detection. We also check the `VersionControl.releaseLogs` array to determine whether our new release log has been added to the array. Afterward, we also check the `ReleaseLogsComponent.logs` property to make sure that the child component has updated the logs array via `@Input`.

Important note:
Notice that we don't use a spy on the ` VersionControlComponent``. addNewReleaseLog ` method. That is because if we do so, that function will become a Jest spy function. Therefore, it'll lose its functionality inside. In return, it'll never add the new log to the `releaseLogs` array, and none of our tests will pass. You can try it out for fun.

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
