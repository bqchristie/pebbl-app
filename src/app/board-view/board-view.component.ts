import { Component, OnInit } from '@angular/core';
import {BoardService} from '../board.service';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.scss']
})
export class BoardViewComponent implements OnInit {

  boards$;

  constructor(private boardService: BoardService) {
    this.boards$ = boardService.getBoards();
  }

  ngOnInit() {
  }

}
