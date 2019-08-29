import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { HeaderService } from '../services/header.service';


@Component({
  selector: 'app-headerview',
  templateUrl: './headerview.component.html',
  styleUrls: ['./headerview.component.css']
})
export class HeaderviewComponent implements OnInit {

  signp_Form:FormGroup;

  constructor(private fb:FormBuilder,private headerService:HeaderService) { }

  ngOnInit() {
    // this.getRolesdata();

    this.signp_Form = this.fb.group({
      user_name: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      role_code: "user",
     
    });
  }

  onSubmit(){
    this.headerService.add(this.signp_Form.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log("Success");
          data
        },
        error => {
          console.log("Error", error);
        }
      )

  }

  // onSubmit() {
  //   // console.log(this.user_add_form.value)
  //   this.usersService
  //     .add(this.user_add_form.value)
  //     .pipe(first())
  //     .subscribe(
  //       data => {
  //         this.getUsersdata();
  //         console.log("Success");

  //       },
  //       error => {
  //         console.log("Error", error);
  //       }
  //     );
  // }




}
