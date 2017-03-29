import { NgModule , ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardComponent } from './board.component';
import { BoardService } from './board.service';


@NgModule({
  imports: [CommonModule],
  declarations: [
    BoardComponent
  ],
  providers: [BoardService],
  exports: [BoardComponent]
})

export class BoardModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BoardModule,
      providers: [BoardService]
    }
  }

}
