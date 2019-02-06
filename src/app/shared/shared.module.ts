import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RootComponent } from './components/root/root.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TicketStateComponent } from './components/ticket-state/ticket-state.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ButtonComponent } from './components/button/button.component';
import { GlanceValuePipe } from './pipes/glance-value.pipe';
import { ChartCardComponent } from './components/chart-card/chart-card.component';
import { GlanceComponent } from './components/glance/glance.component';

@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent,
    MenuComponent,
    TicketStateComponent,
    BreadcrumbComponent,
    ButtonComponent,
    GlanceValuePipe,
    ChartCardComponent,
    GlanceComponent
  ],
  exports: [
    RouterModule,
    MatSidenavModule,
    MatCheckboxModule,
    DragDropModule,
    MatExpansionModule,
    RootComponent,
    HeaderComponent,
    MenuComponent,
    TicketStateComponent,
    BreadcrumbComponent,
    GlanceValuePipe,
    ChartCardComponent,
    GlanceComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatCheckboxModule,
    DragDropModule,
    MatExpansionModule,
    MatListModule
  ],
  providers: [DecimalPipe]
})
export class SharedModule {}
