import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderviewComponent  } from '../client/headerview/headerview.component'

const routes: Routes = [
  { path : "headerview",component:HeaderviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
