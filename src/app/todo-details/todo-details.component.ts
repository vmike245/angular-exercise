import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

interface TodoObject {
  name: string
  id: string
}

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})

@Injectable()
export class TodoDetailsComponent implements OnInit {
  todo: TodoObject

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,) {
    this.todo = {
      name: '',
      id: ''
    };
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: ParamMap) =>
        this.http.get(`api/todos/${params['id']}`)
          .subscribe((todo: TodoObject) => this.todo = todo)
      )
  }

  editTodo(id: string) {
    return this.router.navigateByUrl(`${id}/edit`)
  }

}
