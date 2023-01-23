# How it works...

All right! That was a cool recipe, which I enjoyed working on myself. The key factor of this recipe is the `@angular/cdk/testing` package. If you have worked with e2e tests using Protractor before, this is a similar concept to the Pages in Protractor. First, we create a component harness for both the `ReleaseLogsComponent` and the `ReleaseFormComponent`.
Notice that we import the `ComponentHarness` class from `@angular/cdk/ testing` for both component harnesses. Then, we extend our custom classes called `ReleaseFormComponentHarness` and `ReleaseLogsComponentHarness` from the `ComponentHarness` class. Essentially, this is the correct way to author component harnesses. Did you notice the static property called `hostSelector`? We need this property for every component harness class that we create. And the value is always the selector of the target element/component. This ensures that when we load this harness into the test environment, the environment is able to find the host element in the DOM
– for which we're creating the component harness. In our component harness class, we use the `this.locatorFor()` method to find elements within the host component. The `locateFor()` method takes a single argument as the css selector of the element to be found and returns an `AsyncFactoryFn`. This means the returned value is a function that we can use at a later time to get the required elements.
In the `ReleaseFormComponentHarness` class, we find the submit button, the app name input, and the version number input using the protected methods' `getSubmitButton`, `getAppNameInput`, and `getAppVersionInput`, respectively, which are all of the `AsyncFactoryFn` type, as mentioned earlier. We have these methods set as protected because we don't want the people writing the unit tests to access or care about the information of the DOM elements. This makes it much easier for everyone to write tests without worrying about the internal implementation of accessing the DOM.

Notice that the `getVersionErrorEl`() method is slightly different. It is not actually of the `AsyncFactoryFn` type. Instead, it is a regular async function that first calls the `locatorForAll` method to get all the elements with the alert class and the alert- danger class, which results in the error messages. Then, it selects the second alert element, which is for the app version number input.
One important thing to mention here is that when we call the `locatorFor`() method or the `locatorForAll`() method, we get back a Promise with the TestElement item or a Promise with a list of TestElement items, respectively. Each TestElement item has a bunch of handy methods such as .click(), .sendKeys(), .focus(), .blur(), .getProperty(), .text(), and more. And these methods are what we're interested in since we use them behind the scenes to interact with the DOM elements.
Now, let's talk about configuring the test environment. In the version-control. component.spec.ts file, we set up the environment to use component harnesses
for both ReleaseLogsComponent and ReleaseFormComponent. The TestbedHarnessEnvironment element is the key element here. We use the .loader() method of the TestbedHarnessEnvironment class by providing our fixture as an argument. Note that the fixture is what we get in the test environment using the TestBed.createComponent(VersionControlComponent) statement. Because we provide this fixture to the TestbedHarnessEnvironment.loader() method, we get back an element of the HarnessLoader statement, which can now load component harnesses for the other components – that is, for ReleaseLogsComponent and ReleaseFormComponent.
Notice that in the tests, we use the harnessLoader.getHarness() method by providing the harness class as an argument. This enables the test environment to find
the DOM element associated with the hostSelector property of the harness class. Additionally, we get back the instance of the component harness that we can use further in the test.

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
