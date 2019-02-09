import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallotPaperComponent } from './ballot-paper.component';

describe('BallotPaperComponent', () => {
  let component: BallotPaperComponent;
  let fixture: ComponentFixture<BallotPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallotPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallotPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
