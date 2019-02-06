import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { RetrolyserModule } from './retrolyser/retrolyser.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { RootComponent } from './shared/components/root/root.component';
import { LoginComponent } from './components/login/login.component';
import { ScreenComponent } from './components/screen/screen.component';
import { PockerModule } from './pocker/pocker.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent, ScreenComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    PockerModule,
    BrowserAnimationsModule
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
