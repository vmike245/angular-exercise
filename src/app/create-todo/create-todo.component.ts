import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})

@Injectable()
export class CreateTodoComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  addTodo(name: string) {
    return this.http.post('api/todos', { name }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(() => this.router.navigateByUrl('/'));
  }

}
