import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ListviewComponent } from './listview/listview.component';
import { HeaderviewComponent } from './headerview/headerview.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { UploadviewComponent } from './uploadview/uploadview.component';
import { ProfileviewComponent } from './profileview/profileview.component';
import { RecipeComponent } from './recipe/recipe.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ListviewComponent, HeaderviewComponent, DetailviewComponent, UploadviewComponent, ProfileviewComponent, RecipeComponent, FooterComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ClientModule { }
