import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FolderComponent } from './components/folder/folder.component';
import { FoldersListComponent } from './folders-list/folders-list.component';
import { FileComponent } from './components/file/file.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {DragDropModule} from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    AppComponent,
    FolderComponent,
    FoldersListComponent,
    FileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
