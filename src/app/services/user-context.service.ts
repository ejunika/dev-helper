import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppMenuItem } from 'src/app/shared/modals/app-menu-item';
import { Glance } from '../shared/modals/ticket';

@Injectable({
  providedIn: 'root'
})
export class UserContextService {
  appConfig = {
    menu: { isOpened: true },
    header: { searchEnabled: false, showCreateButton: true }
  };
  constructor() {}

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
          fix: 'K',
          count: 2200000,
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
          fix: 'K',
          count: 500000,
          percent: 30
        },
        icon: {
          iClasses: 'fa fa-traffic-light bg-danger'
        }
      }
    ]);
  }

  getUserMenus(): Observable<Array<AppMenuItem>> {
    return of([
      {
        id: '01',
        displayText: 'Dev Helper',
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
        displayText: 'Pocker',
        icon: { src: '', iClasses: 'fa fa-flag', useSrc: false },
        children: [
          {
            id: '22',
            displayText: 'Board',
            navigationLink: '/app/pocker/board',
            icon: { src: '', iClasses: 'fa fa-hat-wizard', useSrc: false }
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
