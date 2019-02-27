import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GROUPS } from './pbi-data';
import { DataService } from 'src/app/services/data.service';
import { map, filter } from 'rxjs/operators';
import { group } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class PbiService {
  constructor(private dataService: DataService) {}

  getReportTabs(): Observable<any> {
    return of([
      {
        id: 'Attendance',
        displayName: 'Attendance',
        name: 'Attendance',
        isEnabled: true,
        isActive: true
      },
      {
        id: 'Academics',
        displayName: 'Academics',
        name: 'Grades',
        isEnabled: true
      },
      {
        id: 'Behaviour',
        displayName: 'Behaviour',
        name: 'Discipline',
        isEnabled: true
      }
    ]);
  }

  getGroups(): Observable<any> {
    return of(GROUPS);
  }

  getGroup(name: string): Observable<any> {
    return of(GROUPS.filter((group: any) => group.name === name)[0]);
  }

  getUserGroup(): Observable<any> {
    return this.dataService
      .getGroups()
      .pipe(map((groupResponse: any) => groupResponse.value[0]));
  }

  getReport(groupId: string, reportName: string): Observable<any> {
    return this.dataService.getReports(groupId).pipe(
      map((reportResponse: any) => {
        return reportResponse.value.filter(
          (report: any) => report.name === reportName
        )[0];
      })
    );
  }

  getEmbedToken(groupId: string, report: any): Observable<any> {
    return this.dataService.getEmbedToken(groupId, report).pipe(
      map((tokenResponse: any) => {
        return tokenResponse.token;
      })
    );
  }

  get(): Observable<any> {
    return this.dataService.get();
  }
}
