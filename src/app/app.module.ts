import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component'

const appRoutes: Routes = [
  { path: 'create', component: CreateTodoComponent },
  { path: ':id', component: TodoDetailsComponent },
  {
    path: ':id/edit',
    component: TodoEditComponent,
    data: { title: 'Heroes List' }
  },
  { path: '', pathMatch: 'full', component: TodoListComponent },
  { path: '**', component: class Test{} }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateTodoComponent,
    TodoListComponent,
    TodoDetailsComponent,
    TodoEditComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    HttpClientModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
