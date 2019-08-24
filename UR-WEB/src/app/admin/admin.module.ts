import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
//import { MenusComponent } from './menus/menus.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenucontentComponent } from './menucontent/menucontent.component';
import { RolescontentComponent } from './rolescontent/rolescontent.component';
import { UserscontentComponent } from './userscontent/userscontent.component';


@NgModule({
  declarations: [AdminComponent, HeaderComponent, SidebarComponent, MenucontentComponent, RolescontentComponent, UserscontentComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
