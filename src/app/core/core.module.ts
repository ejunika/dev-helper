import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DevhelperComponent } from './components/devhelper/devhelper.component';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { UnauthorizeComponent } from './components/unauthorize/unauthorize.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DevhelperComponent,
    QuickViewComponent,
    NotFoundComponent,
    TicketDetailsComponent,
    UnauthorizeComponent,
    TodoComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  providers: []
})
export class CoreModule {}
