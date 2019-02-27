import { Component, OnInit } from '@angular/core';
import { AppMenuItem } from 'src/app/shared/modals/app-menu-item';
import { UserContextService } from 'src/app/services/user-context.service';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: Array<any>;
  welcomeText: string = '';
  constructor(
    private userContext: UserContextService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.initWelcomeText();
    this.userContext
      .getUserMenus()
      .subscribe((menuItems: Array<AppMenuItem>) => {
        this.menuItems = menuItems;
      });
  }

  initWelcomeText(): void {
    this.userContext.loggedInUser.subscribe((loggedInUser: any) => {
      let currentDate = new Date();
      let hourOfDay = currentDate.getHours();
      if (hourOfDay < 12) {
        this.welcomeText += 'Good morning, ';
      } else if (hourOfDay === 12) {
        this.welcomeText += 'Good noon, ';
      } else if (hourOfDay > 12 && hourOfDay < 17) {
        this.welcomeText += 'Good afternoon, ';
      } else if (hourOfDay > 17) {
        this.welcomeText += 'Good evening, ';
      }
      this.welcomeText += loggedInUser.username;
    });
  }

  logout(): void {
    this.authService.logout().subscribe();
  }
}
