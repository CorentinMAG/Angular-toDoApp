import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ListTodoComponent} from './list-todo/list-todo.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { FilterTodoComponent } from './filter-todo/filter-todo.component';
import {TodoStoreService} from './service/todo-store.service';
import {RouterModule} from '@angular/router';
import {SearchTextPipe} from './utils/myPipes';

@NgModule({
  declarations: [
    AppComponent,
    ListTodoComponent,
    SingleTodoComponent,
    EditTodoComponent,
    FilterTodoComponent,
    SearchTextPipe
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [TodoStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
