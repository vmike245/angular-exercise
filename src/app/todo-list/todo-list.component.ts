import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface ToDoObject {
  name: string,
  id: string
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

@Injectable()
export class TodoListComponent implements OnInit {
  todoList: ToDoObject[]

  constructor(private http: HttpClient, private router: Router) {
    // this.todoList = [{ name: 'TESTQWEDFSWE', id: '1234'}, { name: 'TEST', id: '1234'}, { name: 'TEST', id: '1234'}, { name: 'TESTQWEDFSWE', id: '1234'}, { name: 'TEST', id: '1234'}, { name: 'TEST', id: '1234'}, { name: 'TESTQWEDFSWE', id: '1234'}, { name: 'TEST', id: '1234'}, { name: 'TEST', id: '1234'}, { name: 'TESTQWEDFSWE', id: '1234'}, { name: 'TEST', id: '1234'}, { name: 'TEST', id: '1234'}, { name: 'TESTQWEDFSWE', id: '1234'}, { name: 'TEST', id: '1234'}, { name: 'TEST', id: '1234'}, { name: 'TESTQWEDFSWE', id: '1234'}, { name: 'TEST', id: '1234'}, { name: 'TEST', id: '1234'}, { name: 'TESTQWEDFSWE', id: '1234'}, { name: 'TEST', id: '1234'}, { name: 'TEST', id: '1234'}, { name: 'TESTQWEDFSWE', id: '1234'}, { name: 'TEST', id: '1234'}, { name: 'TEST', id: '1234'}]
    this.todoList = [];
  }

  ngOnInit() {
    return this.http.get('api/todos')
      .subscribe((response: ToDoObject[]) => this.todoList = response);
  }

  deleteTodo(id:string) {
    return this.http.delete(`api/todos/${id}`)
      .subscribe(() => this.todoList = this.todoList.filter(todo => todo.id !== id));
  }

  openDetails(id:string) {
    return this.router.navigateByUrl(`${id}`)
  }

}
