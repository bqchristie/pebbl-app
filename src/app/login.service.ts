import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {

  message = 'please login';
  isLoggedIn = false;

  constructor() {
  }

  login(username, password) {
    console.log('!!!!!!!!!!!!!!!!');
    console.log(username + ':' + password);
    if (username && password) {
      this.isLoggedIn = true;
    }
  }

}
