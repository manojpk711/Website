import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginDemoComponent } from './Components/login-demo/login-demo.component';
import { LoginDemo1Component } from './Components/login-demo1/login-demo1.component';
import { LoginDemo2Component } from './Components/login-demo2/login-demo2.component';
import { ResponsiveAnimatedLoginComponent } from './Components/responsive-animated-login/responsive-animated-login.component';
import { WebsiteComponent } from './Components/website/website.component';
import { GooglePageComponent } from './Components/google-page/google-page.component';
import { AddToCartComponent } from './Components/add-to-cart/add-to-cart.component';
import { HeaderComponent } from './Components/shared/header/header.component';
import { FooterComponent } from './Components/shared/footer/footer.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';
import { FilterComponent } from './Components/add-to-cart/filter/filter.component';
import { ProductListComponent } from './Components/add-to-cart/product-list/product-list.component';
import { CartComponent } from './Components/add-to-cart/cart/cart.component';
import { ProductItemComponent } from './Components/add-to-cart/product-list/product-item/product-item.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginDemoComponent,
    LoginDemo1Component,
    LoginDemo2Component,
    ResponsiveAnimatedLoginComponent,
    WebsiteComponent,
    GooglePageComponent,
    AddToCartComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    FilterComponent,
    ProductListComponent,
    CartComponent,
    ProductItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
