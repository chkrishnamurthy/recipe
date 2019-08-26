import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../models";
import { Router } from '@angular/router';



@Injectable({
  providedIn: "root"
})
export class LoginService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient,private router: Router) {
    this.currentUserSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  
  public login(email:string,password:string){   
    const url = 'http://127.0.0.1:5003/login';      

    return this.http.post<any>(url,{ email, password }).pipe(map(user => {
           localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
  } 



}
