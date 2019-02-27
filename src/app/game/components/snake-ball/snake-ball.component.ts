import { Component, OnInit, HostListener } from '@angular/core';

const SPEED = 500;

@Component({
  selector: 'app-snake-ball',
  templateUrl: './snake-ball.component.html',
  styleUrls: ['./snake-ball.component.scss']
})
export class SnakeBallComponent implements OnInit {
  segment = { left: 0, top: 0 };
  interval: any;
  constructor() {}

  ngOnInit() {}

  @HostListener('document:keydown', ['$event'])
  move(e: KeyboardEvent): void {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    switch (e.keyCode) {
      case 37:
        this.moveLeft();
        break;
      case 38:
        this.moveUp();
        break;
      case 39:
        this.moveRight();
        break;
      case 40:
        this.moveDown();
        break;
    }
  }

  moveUp(): void {
    this.interval = setInterval(() => {
      this.segment.top -= 23;
    }, SPEED);
  }

  moveRight(): void {
    this.interval = setInterval(() => {
      this.segment.left += 23;
    }, SPEED);
  }

  moveDown(): void {
    this.interval = setInterval(() => {
      this.segment.top += 23;
    }, SPEED);
  }

  moveLeft(): void {
    this.interval = setInterval(() => {
      this.segment.left -= 23;
    }, SPEED);
  }
}
