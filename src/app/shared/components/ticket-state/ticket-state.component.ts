import { Component, OnInit, Input } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList
} from '@angular/cdk/drag-drop';
import { TicketState, Ticket } from '../../modals/ticket';

@Component({
  selector: 'app-ticket-state',
  templateUrl: './ticket-state.component.html',
  styleUrls: ['./ticket-state.component.scss']
})
export class TicketStateComponent implements OnInit {
  @Input('ticketState')
  state: TicketState;

  @Input('ticketStates')
  ticketStates: Array<TicketState>;

  connectedContainerIds: Array<string>;

  constructor() {}

  ngOnInit() {
    this.connectedContainerIds = [];
    if (this.ticketStates) {
      this.ticketStates.forEach((state: TicketState) => {
        if (state !== this.state) {
          this.connectedContainerIds.push('state_' + state.id);
        }
      });
    }
  }

  drop(event: CdkDragDrop<TicketState>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data.tickets,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      event.item.data.addTag({
        id: event.container.id,
        label: event.container.id,
        name: event.container.id,
        color: { cssClass: 'badge-success' }
      });
      transferArrayItem(
        event.previousContainer.data.tickets,
        event.container.data.tickets,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  predicate(cdkDrag: CdkDrag<Ticket>, cdkDropList: CdkDropList): boolean {
    if (cdkDropList.id !== 'state_b') {
      return true;
    } else {
      return false;
    }
  }
}
