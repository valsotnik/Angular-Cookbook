# How it works...

There are a lot of moving parts in this recipe, but they're super-easy. First, we import the `CdkStepperModule` class into the imports array of our `AppModule` class.
Then, we create a component that extends the `CdkStepper` class. The reason for extending the `CdkStepper` class is to be able to create this `GameStepperComponent` component so that we can create a reusable template with some styles, and even some custom functionality.
To start using the `GameStepperComponent` component, we wrap the entire template within the `<app-game-stepper>` element in the `game.component.html` file. Since the component extends the `CdkStepper` API, we can use all the functionality of the `CdkStepper` component here. For each step, we use the `<cdk-step>` element from the CDK and wrap the template of the step inside it. Notice that in the `game-stepper. component.html` file, we use the [`ngTemplateOutlet`] attribute for both the step's label and the step's actual content. This is a reflection of how amazing the `CdkStepper` API is. It automatically generates the `step.label` property and the content property on each step based on the values/template we provide for each step.
Since we provide an `<ng-template cdkStepLabel>` inside each `<cdk-step>` element, the CDK generates a `step.stepLabel.template` automatically, which we then use inside the `game-stepper.component.html` file, as mentioned. If we didn't provide it, it would then use the `step.label` property as per our code.
For the bottom navigation buttons, you notice that we use `<button>` elements with the `cdkStepperPrevious` and `cdkStepperNext` directives for going to the previous step and the next step respectively. We also show/hide the next and previous button based on the conditions to check if there is a step to go to. We hide the navigation button using the `[style.visibility]` binding, as you see in the code.
One interesting thing about the `CdkStepper` API is that we can tell whether the user should be able to go to the next steps and backward, regardless of the state of the current step, or whether the user should first do something in the current step to go to the next one. The way we do it is by using the `[linear]` attribute on our `<app-game- stepper>` element, by setting its value to true. This tells the `CdkStepper` API to not move to the next step using the `cdkStepperNext` button, until the current step's completed property is true. While just providing `[linear]="true"` is enough to handle the functionality, we improve the UX by disabling the Next button—in this case, by using `[disabled]="!selected.completed"` on the `cdkStepperNext` button, as it makes more sense to just disable the button if it isn't going to do anything on click.
Also, we needed to decide when a step is considered complete. For the first step, it is obvious that we should have a name entered in the input to consider the step completed— or, in other words, the `FormControl` for the `'name'` property in the `nameForm` `FormGroup` should have a value. For the second step, it makes sense that after the user has guessed a number, regardless of whether the guess is correct or not, we mark the step as completed and let the user go to the next step (the leaderboard) if the user wants to. And that's pretty much about it.

# UsingCdkStepper

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
