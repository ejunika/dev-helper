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
  welcomeText: string = '';
  constructor(private userContext: UserContextService) {}

  ngOnInit() {
    this.initWelcomeText();
    this.userContext
      .getUserMenus()
      .subscribe((menuItems: Array<AppMenuItem>) => {
        this.menuItems = menuItems;
      });
  }

  initWelcomeText(): void {
    let currentDate = new Date();
    let hourOfDay = currentDate.getHours();
    if (hourOfDay < 12) {
      this.welcomeText += 'Good morning, ';
    } else if (hourOfDay > 12) {
      this.welcomeText += 'Good afternoon, ';
    } else if (hourOfDay === 12) {
      this.welcomeText += 'Good noon, ';
    }
    this.welcomeText += 'Ansu';
  }
}
