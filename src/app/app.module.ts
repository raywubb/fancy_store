import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipComponent } from './pip/pip.component';
import { PipItemComponent } from './pip/pip-item/pip-item.component';
import { PdpComponent } from './pdp/pdp.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, PipComponent, PipItemComponent, PdpComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
