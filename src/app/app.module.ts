import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipComponent } from './pip/pip.component';
import { PipItemComponent } from './pip/pip-item/pip-item.component';
import { PdpComponent } from './pdp/pdp.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './products.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PipComponent, PipItemComponent, PdpComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private productService: ProductService) {}
}
