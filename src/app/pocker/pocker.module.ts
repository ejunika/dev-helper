import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { RoomComponent } from './components/room/room.component';
import { SharedModule } from '../shared/shared.module';
import { VoteResultComponent } from './components/vote-result/vote-result.component';
import { BallotPaperComponent } from './components/ballot-paper/ballot-paper.component';
import { VoteComponent } from './components/vote/vote.component';

@NgModule({
  declarations: [
    BoardComponent,
    RoomComponent,
    VoteResultComponent,
    BallotPaperComponent,
    VoteComponent
  ],
  exports: [BoardComponent],
  imports: [CommonModule, SharedModule]
})
export class PockerModule {}
