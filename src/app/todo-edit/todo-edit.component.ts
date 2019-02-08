import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToDoObject } from '../types';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})

@Injectable()
export class TodoEditComponent implements OnInit {

  todo: ToDoObject;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.todo = {
      name: '',
      id: ''
    }
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: ParamMap) =>
        this.http.get(`api/todos/${params['id']}`)
          .subscribe((todo: ToDoObject) => this.todo = todo)
      );
  }

  editTodo(name: string) {
    return this.http.put(`api/todos/${this.todo.id}`, { name }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(() => this.router.navigateByUrl('/todos'));
  }

}
