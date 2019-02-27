import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  mylists = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe((userResponse: any) => {
      this.mylists = userResponse.data;
    });
  }
}
