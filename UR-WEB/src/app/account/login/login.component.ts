import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { LoginService } from '../service/login.service'

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {

  
  email:string;
  password:string;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private loginService:LoginService) {

                if (this.loginService.currentUserValue) {
                  this.router.navigate(['/']);
                  // console.log(this.loginService.currentUserValue)
              }
   }
  
  ngOnInit() {
    this.email="";
    this.password="";
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
 
    this.loginService.login(this.email,this.password).pipe(first())
     .subscribe(
         userData => {
            console.log("defaultUrl", userData.defaultUrl);
            // console.log("userData", userData);
            // console.log("token", userData.token);
            // this.router.navigate([userData.defaultUrl]);
            // this.router.navigate(['headerview']);
            // this.router.navigate(['uploadview']);
            this.router.navigate(['recipe']);


       },
         error => {
            console.log("ERROR user data:", error);
            this.loading = false;
         });
  }
  
}

