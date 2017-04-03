import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardService } from './board.service';
import { RouterModule } from '@angular/router';
import { boardRoutes } from './board.router';


@NgModule({
  imports: [
     CommonModule,
     RouterModule.forChild(boardRoutes)
  ],
  declarations: [
    BoardComponent
  ],
  providers: [BoardService],
  exports: [BoardComponent]
})

export class BoardModule {

}
