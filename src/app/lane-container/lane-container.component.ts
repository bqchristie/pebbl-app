import {Component, OnInit} from '@angular/core';
import {ListService} from '../list.service';

@Component({
  selector: 'app-lane-container',
  templateUrl: './lane-container.component.html',
  styleUrls: ['./lane-container.component.scss']
})
export class LaneContainerComponent implements OnInit {
  lists$;

  constructor(private listService: ListService) {
    this.lists$ = listService.getLists();
    console.log(this.lists$);
  }

  ngOnInit() {
  }

}
