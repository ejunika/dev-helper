import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PbiReportsComponent } from './components/pbi-reports/pbi-reports.component';
import { PbiReportComponent } from './components/pbi-report/pbi-report.component';

@NgModule({
  declarations: [PbiReportsComponent, PbiReportComponent],
  imports: [CommonModule],
  exports: [PbiReportsComponent, PbiReportComponent]
})
export class AnalyticsModule {}
