# How it works

The Angular core team and the community have done an amazing job with the `@angular/pwa` package and, in general, with the `ng add` command, which allows us to add different packages to our applications using Angular schematics. In this recipe, when we run `ng add @angular/pwa`, it uses schematics to generate the app icons along with the web app manifest.

The `manifest.webmanifest` file is a file that contains a JSON object. This object defines the manifest for the PWA and contains some information. The information includes the name of the app, the short name, the theme color, and the configuration for different icons, for different devices. Imagine this PWA installed on your Android phone. You definitely need an icon in your home drawer to tap on the icon to open the app. This file holds the information regarding which icon to use based on different device sizes.
We also see the file `ngsw-config.json`, which contains the configuration for the service worker. Behind the scenes, while the ng add command is running the schematics, it also installs the `@angular/service-worker` package in our project. If you open the `app.module.ts` file, you'll see the code to register our service worker as follows:
`...
import { ServiceWorkerModule } from '@angular/service-worker';
...
@NgModule({
declarations: [AppComponent, CounterComponent],
imports: [
...
ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
// Register the ServiceWorker as soon as the app is
stable
// or after 30 seconds (whichever comes first).
registrationStrategy: 'registerWhenStable:30000',
}),
],
...
})
export class AppModule {}`

The code registers a new service worker file named `ngsw-worker.js`. This file uses the configuration from the `ngsw-config.json` file to decide which resource to cache and using which strategies.

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
