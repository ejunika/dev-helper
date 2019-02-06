import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketStateComponent } from './ticket-state.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

describe('TicketStateComponent', () => {
  let component: TicketStateComponent;
  let fixture: ComponentFixture<TicketStateComponent>;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      imports: [DragDropModule],
      declarations: [TicketStateComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
