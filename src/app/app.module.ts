import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipComponent } from './components/pip/pip.component';
import { PipItemComponent } from './components/pip/pip-item/pip-item.component';
import { PdpComponent } from './components/pdp/pdp.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PipComponent,
    PipItemComponent,
    PdpComponent,
    CartComponent,
    CartItemComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}
}
