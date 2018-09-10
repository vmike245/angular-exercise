import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  submitLogin(login: string, password: string) {
    return this.http.post('api/login', { login, password }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(() => this.router.navigateByUrl('/todos'));
  }
}
