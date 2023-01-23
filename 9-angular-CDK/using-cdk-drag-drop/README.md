# How it works...

There were a couple of interesting directives in this recipe, and we'll go through them all one by one. First of all, as good Angular developers, we import the `DragDropModule` class into the imports array of our `AppModule`, just to make sure we don't end up with errors. Then, we start making the files draggable. We do this by adding the `cdkDrag` directive to each file element by applying the `*ngFor` directive to it. This tells the Angular CDK that this element will be dragged and, therefore, the Angular CDK binds different handlers to each element to be dragged.
Important note:
Angular components by default are not block elements. Therefore, when applying the `cdkDrag` directive to an Angular component such as the `<app-file>` component, it might restrict the animations from the CDK being applied when we're dragging the elements. In order to fix this, we need to set a `display: block;` for our component elements. Notice that we're applying the required styles in the `folders-list.component.scss` file (line 25) for the .`folders__selected-folder-files__file` class.

After configuring the drag elements, we use the `cdkDropList` directive to each container DOM element where we're supposed to drop the file. In our recipe, that is
each folder that we see on the screen, and we can also reorder the files within a folder. Therefore we apply the `cdkDropList` directive to the wrapper element of the currently displayed files, as well as to each `<app-folder>` item with the `*ngFor` looping over the folders array.

Then, we specify the data that we're dragging by specifying `[cdkDragData]="file"` for each draggable file. This helps us identify it in the later process, when we drop it either within the current folder or within other folders. We also specify in which array this dragged item will be added when dropped upon the particular list, and we do this by specifying `[cdkDropListData]="ARRAY"` statements on the elements that we've applied the `cdkDropList` directive to. When the Angular CDK combines the information from the `cdkDragData` and the `cdkDropListData` attributes, it can easily identify if the item was dragged and then dropped within the same list or in another list.
To handle what happens when we drop the dragged file, we use the `(cdkDropListDropped)` method from the Angular CDK on the element with the `cdkDropList` directive. We take the $event emitted from the CDK and pass it to our `onFileDrop()` method. What's great is that within the `onFileDrop()` method, we use the `moveItemInArray()` and `transferArrayItem()` helper methods from the Angular CDK, with a really simple logic to compare the containers. That is, the Angular CDK provides us enough information that we can get away with the whole functionality really easily.
Toward the end of the recipe, we customize how our drag preview should look when we are dragging a file using a custom template, by using the _`cdkDragPreview` directive on it. This tells the Angular CDK to not render it right away but to show it with the
mouse when we start dragging a file. For our recipe, we only show the icon of the file as the drag preview. And finally, we also customize the drop preview (or drag placeholder) using the _`cdkDragPlaceholder` directive, which shows a transparent rectangle with an upward-arrow icon to reflect where the item is going to be added when dropped. Of course, we had to add some custom styles for both the drag preview and the drop preview.

# UsingCdkDragDrop

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
