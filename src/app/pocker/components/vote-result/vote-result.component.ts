import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';

@Component({
  selector: 'app-vote-result',
  templateUrl: './vote-result.component.html',
  styleUrls: ['./vote-result.component.scss']
})
export class VoteResultComponent implements OnInit {
  chartData: ChartData = {
    labels: ['1', '2', '3', '5', '8', '13'],
    datasets: [
      {
        label: 'No of Votes',
        data: [0, 0, 5, 1, 0, 0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 3
      }
    ]
  };

  chartOptions: ChartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    legend: {
      display: false
    }
  };

  constructor() {}

  ngOnInit() {}
}
