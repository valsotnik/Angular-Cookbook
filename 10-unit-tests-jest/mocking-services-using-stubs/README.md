# How it works...

Providing stubs for Angular services is already a breeze. This is thanks to Angular's out-of-the-box methods and tooling from the `@angular/core` package, especially `@angular/core/testing`. First, we create the stub for our `CounterService` and use `jest.fn()` for every method within `CounterService`.
Using `jest.fn()` returns a new, unused mock function that Jest automatically spies upon as well. Optionally, we can also pass a mock implementation method as a parameter to `jest.fn`. View the following example from the official documentation for `jest.fn()`:
`const mockFn = jest.fn();
mockFn();
expect(mockFn).toHaveBeenCalled(); // test passes

// With a mock implementation:
const returnsTrue = jest.fn(() => true);
console.log(returnsTrue()); // true;
expect(returnsTrue()).toBe(true); // test passes`

Once we create the stub, we pass it to the `TestBed` configuration in the provider's array against the `CounterService` – but with the `useValue` property set
to the `CounterServiceMock`. This tells Angular to use our stub as it is for `CounterService`.
Then, in the test where we expect `CounterService.getFromStorage()` to be called when the component initiates, we use the following statement:
`expect(CounterServiceMock.getFromStorage).toBeCalled();`

Notice that in the preceding code, we are able to directly use `expect()` on `CounterServiceMock.getFromStorage`. While this isn't possible in Karma and Jasmine, it is possible with Jest, since we're using `jest.fn()` for each underlying method.
Then, for a test in which we want to check whether the `getFromStorage()` method is called and returns a saved value, we first use the `CounterServiceMock`. `getFromStorage.mockReturnValue(12)`; statement. This ensures that when the `getFromStorage()` method is called, it returns the value of 12. Then, we just run the `ngOnInit()` method in the test and expect that our component's counter property has now been set to 12. This actually means that the following things happen:

1. `ngOnInit()` calls the `getFromStorage()` method.
2. `getFromStorage()` returns the previously saved value (in our case, that's 12, but in reality, that'll be fetched from localStorage).
3. The component's counter property is set to the retrieved value, which, in our case, is 12.

Now, for the final test, we just expect that the `saveToStorage` method of our `CounterService` is called in each necessary case. For this, we use the following types of `expect()` statements:
` expect(CounterServiceMock.saveToStorage).toHaveBeenCalledWith(1);`
That's pretty much about it. Unit tests are fun, aren't they? Now that you've understood how it all works, please refer to the next section for some helpful resources that you can use for further reading.

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
