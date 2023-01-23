# How it works...

Jest provides a way in which to define a list of paths to the files that we want to load for each test. If you open the `package.json` file and see the jest property, you can view the `setupFilesAfterEnv` property, which takes an array of paths to the files. We already have the path defined there for the `jestSetup.ts` file. And one way to define global mocks is to create a new file and then import it into `jestSetup.ts`. This is because it is going to be called in the test environment anyway. And that's what we do in this recipe.
Notice that we use the `Object.defineProperty` method in the window object to provide a mock implementation for the `localStorage` object. This is actually the same for any API that is not implemented in the JSDOM. Similarly, you can provide a global mock for each API that you use in your tests. Notice that in the value property, we use the `createLocalStorageMock()` method. Essentially, this is one way to define mocks. We create the `createLocalStorageMock`() method, and in there we have a private/encapsulated object named storage that mimics the localStorage object. We have also defined the `getItem`() and `setItem`() methods in there so that we can set values to this storage and get values from it. Notice that we do not have the implementations of the `removeItem`() and `clear`() methods that we have in the original localStorage API. We don't have to do it because we're not using these methods in our tests.
In the 'should call the localStorage.getItem method on component init' test, we simply spy on the localStorage object's `getItem`() method, call the `ngOnInit`() method ourselves, and then expect it to have been called. Easy peasy.
In the 'should retrieve the last saved value from localStorage on component init' test, we save a value in the localStorage object for the counter value as '12' using the setItem() method. Essentially, calling the setItem() method calls our mock implementation method and not the actual localStorage API's setItem() method. Notice that, here, we do not spy on the getItem()
method; this is because later on, we want the value of the component's counter property to be 12.
Important note:
Whenever we spy on a method, remember that any statements in the actual function will no longer be executed. This is why we do not spy on the `getItem`() method in the preceding test. If we do so, the `getItem`() method from the mock implementation will not return anything. Therefore, our expected value for the counter property will not be 12.
Put simply, if you have to rely on the outcome of a function's implementation, or the statements executed within a function, do not spy on that function and write your test accordingly.
PS: I always end up learning this the hard way after debugging and bashing my head for a while. Just kidding!

The final test is an easy one. In the 'should save the new counterValue to localStorage on increment, decrement and reset' test, we simply spy on the `setItem`() method as we're not concerned about its implementation. Then, we manually set the value of the counter property multiple times before we run the `increment`(), `decrement`(), and `reset`() methods, respectively. Additionally, we expect the `setItem`() method to have been called with the right arguments to save
the value to the store. Note that we do not check the store's value after saving it. As I mentioned earlier, since we have spied on the `setItem`() method, its internal statement won't trigger and the value won't be saved; therefore, we can't retrieve the saved value afterward.

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
