import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class AccountModule { }
