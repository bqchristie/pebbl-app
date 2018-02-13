import {Injectable} from '@angular/core';

@Injectable()
export class ListService {

  constructor() {
  }

  getLists() {
    return ['List 1', 'List 2', 'List 3', 'List 4'];
  }
}
