import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import {
  service,
  factories,
  models,
  IEmbedConfiguration,
  IEmbedSettings
} from 'powerbi-client';
import { PbiService } from '../../services/pbi.service';
import { map, flatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const powerbi = new service.Service(
  factories.hpmFactory,
  factories.wpmpFactory,
  factories.routerFactory
);

@Component({
  selector: 'app-pbi-report',
  templateUrl: './pbi-report.component.html',
  styleUrls: ['./pbi-report.component.scss']
})
export class PbiReportComponent implements OnInit {
  @ViewChild('pbiReportContainer')
  pbiReportContainer: ElementRef;

  @Input('reportName')
  reportName: string;

  group: any;
  report: any;

  constructor(private pbiService: PbiService) {}

  ngOnInit() {
    let reportContainer = <HTMLDivElement>this.pbiReportContainer.nativeElement;
    let settings: IEmbedSettings = {
      filterPaneEnabled: true,
      navContentPaneEnabled: false
    };
    this.getEmbedToken().subscribe((embedToken: string) => {
      let config: IEmbedConfiguration = {
        type: 'report',
        tokenType: models.TokenType.Embed,
        permissions: models.Permissions.All,
        viewMode: models.ViewMode.View,
        settings: settings,
        accessToken: embedToken,
        embedUrl: this.report.embedUrl,
        id: this.report.id
      };
      if (reportContainer) {
        powerbi.embed(reportContainer, config);
      }
    });
  }

  getEmbedToken(): Observable<string> {
    return this.pbiService.getUserGroup().pipe(
      map((group: any) => {
        this.group = group;
        return group.id;
      }),
      flatMap((groupId: string) => {
        return this.pbiService.getReport(groupId, this.reportName);
      }),
      flatMap((report: any) => {
        this.report = report;
        return this.pbiService.getEmbedToken(this.group.id, report);
      })
    );
  }
}
