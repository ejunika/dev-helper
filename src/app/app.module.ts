import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { RetrolyserModule } from './retrolyser/retrolyser.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { RootComponent } from './shared/components/root/root.component';
import { LoginComponent } from './components/login/login.component';
import { ScreenComponent } from './components/screen/screen.component';
import { PockerModule } from './pocker/pocker.module';
import { VirtualDuniyaModule } from './virtual-duniya/virtual-duniya.module';
import { GameModule } from './game/game.module';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AnalyticsModule } from './analytics/analytics.module';
import { DesignerModule } from './designer/designer.module';

@NgModule({
  declarations: [LoginComponent, ScreenComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    PockerModule,
    VirtualDuniyaModule,
    GameModule,
    AnalyticsModule,
    DesignerModule,
    RetrolyserModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
