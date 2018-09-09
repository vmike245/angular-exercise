import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component'

const appRoutes: Routes = [
  { path: 'create', component: CreateTodoComponent },
  { path: ':id', component: class Test{} },
  {
    path: ':id/edit',
    component: class Test{},
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
