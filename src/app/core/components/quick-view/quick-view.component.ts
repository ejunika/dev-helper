import { Component, OnInit } from '@angular/core';
import { TicketState, Ticket } from 'src/app/shared/modals/ticket';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'devhelper-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  ticketStates: Array<TicketState>;
  tickets: Array<Ticket>;
  constructor(private dataService: DataService) {
    this.ticketStates = [
      new TicketState('a', 'State: A'),
      new TicketState('b', 'State: B'),
      new TicketState('c', 'State: C'),
      new TicketState('d', 'State: D'),
      new TicketState('e', 'State: E'),
      new TicketState('f', 'State: F'),
      new TicketState('g', 'State: G')
    ];
  }

  ngOnInit() {
    this.dataService.getCurrentTickets().subscribe((tickets: Array<Ticket>) => {
      this.ticketStates.map((ticketState: TicketState) => {
        if (ticketState.id === 'a') {
          ticketState.tickets = tickets;
        }
      });
    });
  }
}
