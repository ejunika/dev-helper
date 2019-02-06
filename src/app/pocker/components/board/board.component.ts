import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  rooms = 'Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday'
    .split(', ')
    .map((item: string) => {
      return { id: item.toLocaleLowerCase(), title: item };
    });

  constructor() {}

  ngOnInit() {}
}
