import { Injectable } from '@angular/core';
import { LoginService } from '../../account/service/login.service';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  url = "http://127.0.0.1:5003/api/menuaction/";

  constructor(private http: HttpClient,
    private loginService:LoginService) { }

  getUserMenuList(){
    let currentUser_role_code = this.loginService.currentUserValue.user_details.role_code;
    //  console.log("side Menu service currentUser", currentUser_role_code);
    //  console.log(`${this.url}${currentUser_role_code}`);
    return this.http.get(`${this.url}${currentUser_role_code}`);
  }


}
