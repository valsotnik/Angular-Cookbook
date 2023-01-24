# How it works...

In this recipe, we begin by looking at the `appLogs` object, which contains some key-value pairs. The value for each key-value pair represents the number of times Angular ran change detection for a particular component. The hours, milliseconds, minutes, and seconds keys represent the `WatchTimeComponent` instance for each of the values shown on the clock. The watch key represents the `WatchComponent` instance.
At the beginning of the recipe, we see that the value for the watch key is more than twice the value of the milliseconds key. Why do we care about the milliseconds key at all? Because the `@Input()` attribute binding milliseconds changes most frequently in our application—that is, it changes every 1 millisecond (ms). The second most frequently changed values are the `xCoordinate` and `yCoordinates` properties within the `WatchComponent` class, which change every 30 ms. The `xCoordinate` and `yCoordinate` values aren't bound directly to the template (the HyperText Markup Language (HTML)) because they change the Cascading Style Sheets (CSS) variables of the `stopWatch` view child. This happens inside the animate() method, as follows:
`el.style.setProperty('--x', `${this.xCoordinate}px`);`
`el.style.setProperty('--y', `${this.yCoordinate}px`);`
Thus, changing these values shouldn't actually trigger change detection at all. We begin by limiting the clock window, using the `clearInterval()` method in the `WatchBoxComponent` class so that the clock stops within 4 seconds and we can evaluate the numbers. In Figure 12.11, we see that even after the clock stops, the change-detection mechanism keeps triggering for the `WatchComponent` class. This increases the count for the watch key in the `appLogs` object as time passes. We then stop the animation by using `clearInterval()` in the `WatchComponent` class. This stops the animation after 4 seconds as well. In Figure 12.12, we see that the count for the watch key stops increasing after the animation stops.
We then try to see the count of change detection only based on the animation. In Step 6, we stop the clock. Therefore, we only get a count based on the animation in the `appLogs` object for the watch key, which is a value between 250 and 260. We then introduce the magic `runOutsideAngular()` method into our code. This method is part of the `NgZone` service.
The `NgZone` service is packaged with the `@angular/core` package. The `runOutsideAngular()` method accepts a method as a parameter. This method is executed outside the Angular zone. This means that the `setTimeout()` and `setInterval()` methods used inside the `runOutsideAngular()` method do not trigger the Angular change- detection cycle. You can see in Figure 12.13 that the count drops to 4 after using the `runOutsideAngular()` method.

We then remove the `clearInterval()` usage from both the `WatchBoxComponent` and the `WatchComponent` classes—that is, to run the clock and the animation again,
as we did in the beginning. In Figure 12.14, we see that the count for the watch key is almost twice the value of the milliseconds key. Now, why is that double exactly?
This is because in development mode, Angular runs the change-detection mechanism twice. Therefore, in Step 9 and Step 10, we run the application in production mode, and in Figure 12.15, we see that the value for the watch key is just one greater than the value for the milliseconds key, which means that the animation does not trigger any change detection for our application any more.

# RunOutsideAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.

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
