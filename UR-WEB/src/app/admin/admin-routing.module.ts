import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenucontentComponent } from './menucontent/menucontent.component';
import { RolescontentComponent } from './rolescontent/rolescontent.component';
import { UserscontentComponent } from './userscontent/userscontent.component';
import { MenuaccessComponent } from './menuaccess/menuaccess.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AuthGuard } from '../account/helpers';

const routes: Routes = [
  { path:'admin', component:AdminComponent,
  canActivate:[AuthGuard],
  children:[{ path:"", component:HeaderComponent, outlet:"header" },
            { path:"",  component:SidebarComponent, outlet:"sidebar"  },
            { path:"",  component:MenucontentComponent,  outlet:"display" },
            { path:"roles",  component:RolescontentComponent,  outlet:"display" },
            { path:"users",  component:UserscontentComponent,  outlet:"display" },
            { path:"menuaccess", component:MenuaccessComponent, outlet:"display" },
            {  path:"menus",   component:MenucontentComponent,   outlet:"display"} ,
            {  path:"recipe",   component:RecipesComponent,   outlet:"display"} 
          ]
 },

 { path:'user', component:AdminComponent,
  children:[{ path:"", component:HeaderComponent, outlet:"header" },
            { path:"",  component:SidebarComponent, outlet:"sidebar"  },
            { path:"",  component:UserscontentComponent,  outlet:"display" },
            { path:"roles",  component:RolescontentComponent,  outlet:"display" },
            { path:"users",  component:UserscontentComponent,  outlet:"display" },
            { path:"menuaccess", component:MenuaccessComponent, outlet:"display" },
            {  path:"menus",   component:MenucontentComponent,   outlet:"display"} 
          ]
 }


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AdminRoutingModule { }
