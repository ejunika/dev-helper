import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.scss']
})
export class ChartCardComponent implements OnInit {
  @ViewChild('chartCanvas')
  chartCanvas: ElementRef;

  @Input('chartType')
  chartType: string;

  @Input('chartData')
  chartData: any;

  @Input('chartOptions')
  chartOptions: any;

  @Input('chartTitle')
  chartTitle: string;

  @Input('chartSubTitle')
  chartSubTitle: string;

  chart: Chart;

  constructor() {}

  ngOnInit() {
    this.chart = new Chart(this.chartCanvas.nativeElement.getContext('2d'), {
      type: this.chartType,
      data: this.chartData,
      options: this.chartOptions
    });
  }
}
