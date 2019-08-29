import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../account/service/login.service";

import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { HeaderService } from '../services/header.service';


@Component({
  selector: 'app-profileview',
  templateUrl: './profileview.component.html',
  styleUrls: ['./profileview.component.css']
})
export class ProfileviewComponent implements OnInit {

  userProfile;
  user_update_form:FormGroup;
  user_id:string;
  constructor(private loginService:LoginService,private fb:FormBuilder,private headerService:HeaderService) { }

  ngOnInit() {
   this.getUserData();
    this.user_update_form = this.fb.group({
      user_name: ["", Validators.required],
      email: ["", Validators.required],
    });
  }

  getUserData(){
    this.userProfile = this.loginService.currentUserValue.user_details;
    this.user_id = this.loginService.currentUserValue.user_details._id;
  }

  
  UpdateOnSubmit(){
    this.headerService.edit(this.user_id,this.user_update_form.value)
    .pipe(first())
        .subscribe(
          data => {
            console.log("Updated");
            this.getUserData();
          },
          error => {
            console.log("Error=> ", error);
          }
        );
       }

}
