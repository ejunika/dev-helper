import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeBallComponent } from './snake-ball.component';

describe('SnakeBallComponent', () => {
  let component: SnakeBallComponent;
  let fixture: ComponentFixture<SnakeBallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnakeBallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakeBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
