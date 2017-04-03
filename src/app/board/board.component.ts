import { Component, OnInit , Input} from '@angular/core';
import { BoardService } from './board.service';

@Component({
  selector:"board-component",
  template:
    `<ul><li *ngFor="let item of items">
          {{item.gr_subject}}/{{item.gr_admin}}/{{item.gr_device}}
        </li>
    </ul>`,
  styles:[]
})
export class BoardComponent implements OnInit{

 items:Object;
  constructor(public boardService: BoardService){}

  ngOnInit() {
    let data=this.boardService.getData();
    data.then(result=>{ this.items=result; console.log(this.items)})
      .catch(error=>console.log(error));
  }
}

