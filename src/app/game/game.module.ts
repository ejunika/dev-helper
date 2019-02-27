import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnakeBallComponent } from './components/snake-ball/snake-ball.component';

@NgModule({
  declarations: [SnakeBallComponent],
  imports: [CommonModule],
  exports: [SnakeBallComponent]
})
export class GameModule {}
