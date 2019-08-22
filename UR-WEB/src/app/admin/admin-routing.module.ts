import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenusComponent } from './menus/menus.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path:'admin',
  component:AdminComponent,

//   children:[
//   {
//   path:"",
//   component:AdminComponent,
//   outlet:"header"
// },
// {
//   path:"",
//   component:AdminComponent,
//   outlet:"sidemenu"

// },
// {
//   path:"",
//   component:AdminComponent,
//   outlet:"content"

// }
// ]


  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
