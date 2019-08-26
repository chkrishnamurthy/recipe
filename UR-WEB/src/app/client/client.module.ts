import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ListviewComponent } from './listview/listview.component';
import { HeaderviewComponent } from './headerview/headerview.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { UploadviewComponent } from './uploadview/uploadview.component';
import { ProfileviewComponent } from './profileview/profileview.component';

@NgModule({
  declarations: [ListviewComponent, HeaderviewComponent, DetailviewComponent, UploadviewComponent, ProfileviewComponent],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
