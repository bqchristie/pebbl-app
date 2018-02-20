import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ListService {

  constructor(private http: HttpClient) {
  }

  getLists(): Observable<Object> {

    return this.http.get('http://localhost:3000/api/v1/board')
  }
}
