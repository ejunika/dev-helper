import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ticket } from '../shared/modals/ticket';
import { HttpClient } from '@angular/common/http';
import { PokerRoom } from '../shared/modals/poker';

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

  getRoom(roomId: string): Observable<PokerRoom> {
    return of({
      id: roomId,
      name: 'The New Room',
      details: 'Details of the new room'
    });
  }

  getGroups(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/insights/v1/pbi');
  }

  getReports(groupId: string): Observable<any> {
    return this.httpClient.get(
      `http://localhost:8080/insights/v1/pbi/${groupId}/reports`
    );
  }

  getEmbedToken(groupId: string, report: any): Observable<any> {
    return this.httpClient.post(
      `http://localhost:8080/insights/v1/pbi/${groupId}/reports/${
        report.id
      }/GenerateToken`,
      {
        datasetIds: [report.datasetId]
      }
    );
  }

  get(): Observable<any> {
    return this.httpClient.post(
      `http://localhost:8080/insights/v1/pbi/11dcc8a2-e316-43fd-89fd-511902674e2f/reports/ff41ec0b-ca08-437d-9236-c8e61bc12488/GenerateToken`,
      {
        datasetIds: ['87c578ce-309f-48a0-819c-23b9d7f4ee28']
      }
    );
  }

  getAuthInfo(): Observable<any> {
    return this.httpClient.get('/auth/info');
  }

  getUsers(): Observable<any> {
    return this.httpClient.get('/users');
  }

  getUserMenus(): Observable<any> {
    return this.httpClient.get('/navigations');
  }

  login(loginDetails: any): Observable<any> {
    return this.httpClient.post('/login', {
      username: loginDetails.username,
      password: loginDetails.password
    });
  }
}
