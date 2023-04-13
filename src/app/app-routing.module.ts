import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdpComponent } from './pdp/pdp.component';
import { PipComponent } from './pip/pip.component';

const appRoutes: Routes = [
  { path: '', component: PipComponent },
  { path: 'product/:id', component: PdpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
