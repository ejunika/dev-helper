import { Component, OnInit } from '@angular/core';
import { AppMenuItem } from 'src/app/shared/modals/app-menu-item';
import { UserContextService } from 'src/app/services/user-context.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: Array<any>;

  constructor(private userContext: UserContextService) {}

  ngOnInit() {
    this.userContext
      .getUserMenus()
      .subscribe((menuItems: Array<AppMenuItem>) => {
        this.menuItems = menuItems;
      });
  }
}
