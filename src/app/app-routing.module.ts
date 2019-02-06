import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ScreenComponent } from './components/screen/screen.component';
import { QuickViewComponent } from './core/components/quick-view/quick-view.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { TicketDetailsComponent } from './core/components/ticket-details/ticket-details.component';
import { BoardComponent } from './pocker/components/board/board.component';
import { RoomComponent } from './pocker/components/room/room.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    component: ScreenComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'core/quick-view'
      },
      {
        path: 'core/tickets/:ticketId',
        component: TicketDetailsComponent
      },
      {
        path: 'core/quick-view',
        component: QuickViewComponent
      },
      {
        path: 'core/dashboard',
        component: DashboardComponent
      },
      {
        path: 'pocker/board',
        component: BoardComponent
      },
      {
        path: 'pocker/board/rooms/:roomId',
        component: RoomComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
