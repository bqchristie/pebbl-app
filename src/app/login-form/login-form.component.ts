import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login-form',
  templateUrl : 'login-form.html',
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
