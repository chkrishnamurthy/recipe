import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenucontentComponent } from './menucontent/menucontent.component';
import { RolescontentComponent } from './rolescontent/rolescontent.component';
import { UserscontentComponent } from './userscontent/userscontent.component';
import { MenuaccessComponent } from './menuaccess/menuaccess.component';

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
              outlet:"display"
            } ,
            {
              path:"roles",
              component:RolescontentComponent,
              outlet:"display"
            } ,
            {
              path:"users",
              component:UserscontentComponent,
              outlet:"display"
            } ,
            {
              path:"menuaccess",
              component:MenuaccessComponent,
              outlet:"display"
            } 
          ]
 }


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
