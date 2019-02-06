import { Component, OnInit } from '@angular/core';
import { UserContextService } from 'src/app/services/user-context.service';

@Component({
  selector: 'devhelper-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
  opened: boolean;
  constructor(
    private userContextService: UserContextService
  ) {
    this.userContextService.getAppConfig().subscribe((appConfig: any)=> {
      this.opened = appConfig.menu.isOpened;
    });
  }

  ngOnInit() {}
}
