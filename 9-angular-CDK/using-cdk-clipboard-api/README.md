# How it works...

In the recipe, we've used two main things from the CDK Clipboard API—one is the `cdkCopyToClipboard` directive, and the other is the Clipboard service.
The `cdkCopyToClipboard` directive binds a click handler to the element this directive is applied to. It works both as the selector of the directive and an `@Input`() item for the directive so that it knows which value is to be copied to the clipboard when the element is clicked. In our recipe, for the link input, notice that we use `[cdkCopyToClipboard]="linkInput.value"`. This binds a click handler to the `<input>` element and also binds the value property of the `linkInput` template variable, which points to the value of the input that is the actual link to be copied. When we click the input, it accesses the value of the input using the `linkInput`. value binding, and we do the same for the `<text-area>` input. The only difference is that the `cdkCopyToClipboard` directive is not bound to the `<text-area>` element itself. The reason is that we want to bind the click handler to the button below the text area instead. Therefore, on the button for copying the text, we have the `[cdkCopyToClipboard]="textInput.value"` binding.
For the image, we do something different. We use the Clipboard service from the `@ angular/cdk/clipboard` package to manually copy the blob URL. We create a method named `copyImageUrl()`, which is called when clicking the button for copying the image. We pass the imageUrl property to this method, which in turn downloads the image, reads it as a blob, and generates the blob URL, which is copied to the clipboard using the copy() method of the Clipboard service.

# UsingCdkClipboardApi

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
