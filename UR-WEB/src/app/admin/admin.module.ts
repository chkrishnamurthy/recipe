import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenucontentComponent } from './menucontent/menucontent.component';
import { RolescontentComponent } from './rolescontent/rolescontent.component';
import { UserscontentComponent } from './userscontent/userscontent.component';
import { MenuaccessComponent } from './menuaccess/menuaccess.component';
import { FormsModule } from '@angular/forms';
import { RecipesComponent } from './recipes/recipes.component';


@NgModule({
  declarations: [AdminComponent, HeaderComponent, SidebarComponent, MenucontentComponent, RolescontentComponent, UserscontentComponent, MenuaccessComponent, RecipesComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
