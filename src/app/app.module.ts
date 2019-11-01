import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginDemoComponent } from './Components/login-demo/login-demo.component';
import { LoginDemo1Component } from './Components/login-demo1/login-demo1.component';
import { LoginDemo2Component } from './Components/login-demo2/login-demo2.component';
import { ResponsiveAnimatedLoginComponent } from './Components/responsive-animated-login/responsive-animated-login.component';
import { WebsiteComponent } from './Components/website/website.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginDemoComponent,
    LoginDemo1Component,
    LoginDemo2Component,
    ResponsiveAnimatedLoginComponent,
    WebsiteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
