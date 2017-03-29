import { Component } from '@angular/core';
import { BoardService } from './board.service';

@Component({
  selector:"board-component",
  template:"<div>hi</div>",
  styles:[]
})
export class BoardComponent{

  constructor(boardService: BoardService){
    boardService.getData();
  }
}
