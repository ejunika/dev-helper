import { Component, OnInit } from '@angular/core';
import { PbiService } from '../../services/pbi.service';
import { mergeMap, map, flatMap } from 'rxjs/operators';
import { Report } from 'report';

@Component({
  selector: 'app-pbi-reports',
  templateUrl: './pbi-reports.component.html',
  styleUrls: ['./pbi-reports.component.scss']
})
export class PbiReportsComponent implements OnInit {
  reportTabs: Array<any>;
  launchReport = false;

  constructor(private pbiService: PbiService) {}

  ngOnInit() {
    this.pbiService.getReportTabs().subscribe((reportTabs: Array<any>) => {
      this.reportTabs = reportTabs;
    });
  }
}
