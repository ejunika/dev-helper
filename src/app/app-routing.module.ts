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
import { TodoComponent } from './core/components/todo/todo.component';
import { FeedsComponent } from './virtual-duniya/components/feeds/feeds.component';
import { SnakeBallComponent } from './game/components/snake-ball/snake-ball.component';
import { AuthenticationGuardService } from './services/authentication-guard.service';
import { AuthorizationGuardService } from './services/authorization-guard.service';
import { PbiReportsComponent } from './analytics/components/pbi-reports/pbi-reports.component';
import { EditorComponent } from './designer/components/editor/editor.component';

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
    canActivate: [AuthenticationGuardService],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'core/pbi-reports'
      },
      {
        path: 'core/tickets/:ticketId',
        component: TicketDetailsComponent,
        canActivate: [AuthorizationGuardService]
      },
      {
        path: 'core/quick-view',
        component: QuickViewComponent,
        canActivate: [AuthorizationGuardService]
      },
      {
        path: 'core/dashboard',
        component: DashboardComponent,
        canActivate: [AuthorizationGuardService]
      },
      {
        path: 'core/todo-app',
        component: TodoComponent,
        canActivate: [AuthorizationGuardService]
      },
      {
        path: 'core/pbi-reports',
        component: PbiReportsComponent,
        canActivate: [AuthorizationGuardService]
      },
      {
        path: 'core/designer/editor',
        component: EditorComponent,
        canActivate: [AuthorizationGuardService]
      },
      {
        path: 'poker/board',
        component: BoardComponent,
        canActivate: [AuthorizationGuardService]
      },
      {
        path: 'poker/board/rooms/:roomId',
        component: RoomComponent,
        canActivate: [AuthorizationGuardService]
      },
      {
        path: 'virtual-duniya/feeds',
        component: FeedsComponent,
        canActivate: [AuthorizationGuardService]
      },
      {
        path: 'games/snake-ball',
        component: SnakeBallComponent,
        canActivate: [AuthorizationGuardService]
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
