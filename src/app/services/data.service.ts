import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ticket } from '../shared/modals/ticket';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getCurrentTickets(): Observable<Array<Ticket>> {
    return of([
      new Ticket('1', 'UIAD-1234', 'To do task 1'),
      new Ticket('2', 'UIAD-1235', 'To do task 2'),
      new Ticket('3', 'UIAD-1236', 'To do task 3'),
      new Ticket('4', 'UIAD-1237', 'To do task 4')
    ]);
  }

  getRoom(): Observable<any> {
    return this.httpClient.get('');
  }

}
