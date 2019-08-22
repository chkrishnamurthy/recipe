import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenusComponent } from './menus/menus.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenucontentComponent } from './menucontent/menucontent.component';

const routes: Routes = [
  {
    path:'admin',
  component:AdminComponent,

  children:[
  {
  path:"",
  component:HeaderComponent,
  outlet:"header"
},
{
  path:"",
  component:SidebarComponent,
  outlet:"sidebar"
},
{
  path:"",
  component:MenucontentComponent,
  outlet:"menucontent"

}]
 },

 {
  path:'menus',
component:MenusComponent,

 }




 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
