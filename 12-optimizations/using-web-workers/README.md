# How it works...

As we discussed in the recipe's description, web workers allow us to run and execute code in a separate thread from the main JavaScript (or UI thread). At the beginning of the recipe, whenever we refresh the app or search for a user, it blocks the UI thread. This is until a unique ID is generated for each card. We begin the recipe by creating a web worker using the Angular command-line interface (CLI). This creates an `id-generator. worker.ts` file, which contains some boilerplate code to receive messages from the UI thread and to send a message back to it as a response. The CLI command also updates
the `angular.json` file by adding a `webWorkerTsConfig` property. The value against the `webWorkerTsConfig` property is the path to the `tsconfig.worker.json` file, and the CLI command also creates this `tsconfig.worker.json` file. If you open the `tsconfig.worker.json` file, you should see the following code:
`/* To learn more about this file see: https://angular.io/
config/tsconfig. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/worker",
    "lib": [
     "es2018",
      "webworker"
    ],
    "types": []
  },
  "include": [
    "src/**/*.worker.ts"
  ]
}`

After creating a web worker file, we create another file named `uniqueIdWorker.ts`. This file exports the `getUniqueIdWorker()` method as the default export. When we call this method, it generates a `new Worker` instance if we don't have a worker generated already. The method uses the `id-generator.worker.ts` file to generate a worker. We also use the `addEventListener()` method inside the worker file to listen to the messages sent from the UI thread (that is, the `UserService` class). We receive the index of the user card and the email of the user as the data in this message. We then use a for loop to generate a unique ID (uniqueId variable), and once the loop ends, we use the `postMessage()` method to send the `uniqueId` variable and the email back to the UI thread.
Now, in the `UserService` class, we listen to messages from the worker. In the `constructor()` method, we check if web workers are available in the environment by checking the value from the `getUniqueIdWorker()` method, which should be a non-null value. Then, we use the `worker.onmessage` property to assign it a method. This is to listen to the messages from the worker. Since we already know that we get
the uniqueId variable and the email from the worker, we use the email to get the appropriate user from the `usersCache` variable. Then, we store the user data with the uniqueId variable to the localStorage against the user's email.
Finally, we update the `saveUserUniqueIdsToStorage()` method to use the worker instance if it is available. Notice that we use the `worker.postMessage()` method to pass the index and the email of the user. Note also that we are using the previous code as a fallback for cases where we don't have web workers enabled.

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
