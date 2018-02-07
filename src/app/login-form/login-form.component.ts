import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login-form',
  template: `
  <h2>{{msg}}</h2>
    <input #username type='text'>
    <input #password type='password'>
    <button (click)="login(username.value, password.value)">Login</button>
  `,
  styles: []
})
export class LoginFormComponent implements OnInit {
  msg = '';

  login(un, pw) {
    this.loginService.login(un, pw);
  }

  constructor(private loginService: LoginService) {
    this.msg = loginService.message;
  }

  ngOnInit() {
  }

}
