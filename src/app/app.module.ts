import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipComponent } from './pip/pip.component';
import { PipItemComponent } from './pip/pip-item/pip-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PipComponent,
    PipItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
