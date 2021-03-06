import { Injectable } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';
import { AppMenuItem } from 'src/app/shared/modals/app-menu-item';
import { Glance } from '../shared/modals/ticket';
import { DataService } from './data.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserContextService {
  appConfig = {
    menu: { isOpened: true },
    header: { searchEnabled: false, showCreateButton: true }
  };

  loggedInUser: Observable<any>;

  constructor(private dataService: DataService) {
    this.initLoggedInUser();
  }

  initLoggedInUser(): void {
    this.loggedInUser = new Observable((subscriber: Subscriber<any>) => {
      this.dataService.getAuthInfo().subscribe((authResponse: any) => {
        subscriber.next(authResponse.data[0]);
      }, (error: Error)=>{

      });
    });
  }

  getGlances(): Observable<Array<Glance>> {
    return of([
      {
        id: '1',
        name: 'Sales',
        value: {
          pre: true,
          fix: '$',
          count: 22,
          percent: 70
        },
        icon: {
          iClasses: 'fa fa-money-bill-alt bg-primary'
        }
      },
      {
        id: '2',
        name: 'Subscriptions',
        value: {
          pre: false,
          fix: 'K',
          count: 22,
          percent: 40
        },
        icon: {
          iClasses: 'fa fa-chart-bar bg-warning'
        }
      },
      {
        id: '3',
        name: 'Traffic',
        value: {
          pre: false,
          fix: 'M',
          count: 220,
          percent: 80
        },
        icon: {
          iClasses: 'fa fa-traffic-light bg-success'
        }
      },
      {
        id: '3',
        name: 'Organic Traffic',
        value: {
          pre: false,
          fix: 'M',
          count: 50,
          percent: 30
        },
        icon: {
          iClasses: 'fa fa-traffic-light bg-danger'
        }
      }
    ]);
  }

  getUserMenus(): Observable<Array<AppMenuItem>> {
    return this.dataService.getUserMenus().pipe(
      map((navigationResponse: any) => {
        return navigationResponse.data;
      })
    );
    return of([
      {
        id: '01',
        displayText: 'Core Application',
        icon: { src: '', iClasses: 'fa fa-hands-helping', useSrc: false },
        children: [
          {
            id: '11',
            displayText: 'Dashboard',
            navigationLink: '/app/core/dashboard',
            icon: { src: '', iClasses: 'fa fa-chalkboard', useSrc: false }
          },
          {
            id: '12',
            displayText: 'Quick View',
            navigationLink: '/app/core/quick-view',
            icon: { src: '', iClasses: 'fa fa-running', useSrc: false }
          },
          {
            id: '13',
            displayText: 'Retrolyser',
            navigationLink: '/app/core/retrolyser',
            icon: { src: '', iClasses: 'fa fa-retweet', useSrc: false }
          },
          {
            id: '14',
            displayText: 'To Do Application',
            navigationLink: '/app/core/todo-app',
            icon: { src: '', iClasses: 'fa fa-clipboard-list', useSrc: false }
          }
        ]
      },
      {
        id: '02',
        displayText: 'Poker',
        icon: { src: '', iClasses: 'fa fa-flag', useSrc: false },
        children: [
          {
            id: '22',
            displayText: 'Board',
            navigationLink: '/app/poker/board',
            icon: { src: '', iClasses: 'fa fa-hat-wizard', useSrc: false }
          }
        ]
      },
      {
        id: '03',
        displayText: 'Virtual Duniya',
        icon: { src: '', iClasses: 'fa fa-users', useSrc: false },
        children: [
          {
            id: '22',
            displayText: 'Feeds',
            navigationLink: '/app/virtual-duniya/feeds',
            icon: { src: '', iClasses: 'fa fa-comments', useSrc: false }
          }
        ]
      },
      {
        id: '04',
        displayText: 'Games',
        icon: { src: '', iClasses: 'fa fa-gamepad', useSrc: false },
        children: [
          {
            id: '22',
            displayText: 'Snake Ball',
            navigationLink: '/app/games/snake-ball',
            icon: { src: '', iClasses: 'fa fa-futbol', useSrc: false }
          }
        ]
      }
    ]);
  }

  getAppConfig(): Observable<any> {
    return of(this.appConfig);
  }

  setAppConfig(prop: string, value: any) {
    this.appConfig.header.showCreateButton = value;
  }
}
