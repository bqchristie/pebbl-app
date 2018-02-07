import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {

  message = 'please login';

  constructor() {
  }

  login(username, password) {
    console.log('!!!!!!!!!!!!!!!!');
    console.log(username + ':' + password);
  }

}
