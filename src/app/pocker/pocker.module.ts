import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { RoomComponent } from './components/room/room.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BoardComponent, RoomComponent],
  exports: [BoardComponent],
  imports: [CommonModule, SharedModule]
})
export class PockerModule {}
