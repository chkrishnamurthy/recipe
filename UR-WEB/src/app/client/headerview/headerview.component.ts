import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { HeaderService } from '../services/header.service';
import { LoginService } from '../../account/service/login.service'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-headerview',
  templateUrl: './headerview.component.html',
  styleUrls: ['./headerview.component.css']
})
export class HeaderviewComponent implements OnInit {

  signp_Form:FormGroup;
  login_Form:FormGroup;
  login_btn :boolean = true;
  abc = true;
  waring_Vlaue:string;
  warning_msg:boolean = false;
  existed_user = false;

  constructor(private fb:FormBuilder,private headerService:HeaderService,private loginService:LoginService, private route: ActivatedRoute, private router: Router) {
    this.loginChecking();
    
   }

   loginChecking(){
    if (this.loginService.currentUserValue) {
    this.login_btn = false;
    // this.reload = true;
       }
   }

  ngOnInit() {
    this.signp_Form = this.fb.group({
      user_name: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      role_code: "user",
    });

    this.login_Form = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });

  }

  SignUpSubmit(){
    this.headerService.add(this.signp_Form.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log("Success");
          data
        },
        error => {
          // console.log("Error", error);
          this.existed_user =  true;
          setTimeout(()=>{
          this.existed_user = false;
          },3000)
        }
      )

  }

  

  loginSubmit() {
    let email = this.login_Form.value.email;
    let password = this.login_Form.value.password;  
    this.loginService.login(email,password).pipe(first())
     .subscribe(
         userData => {
          // console.log("Login Success",userData);
          this.login_btn  = false;
       },
         error => {
            // console.log("ERROR user data:", error);
            this.error_message();
         });

         this.login_Form = this.fb.group({
          email: "",
          password:""
        });
  }


  error_message(){
        this.warning_msg = true;
        setTimeout(()=>{
        this.warning_msg = false;
        },3000)
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.login_btn  = true;

  }
  


}

