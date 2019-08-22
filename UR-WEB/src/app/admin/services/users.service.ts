import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from '../../account/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  current_User;
  constructor(private http:HttpClient, private loginService:LoginService) {
    this.current_User =  this.loginService.currentUserValue.userobj.user_name;
   }

  url="http://127.0.0.1:5003/api/users";


  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }

  add(user){
    const UsersData = {
      user_name: user.user_name,
      email:  user.email,
      password:  user.password,
      role_code:  user.role_code,
      user_code: user.user_code,
      created_by:  this.current_User
    }
    return this.http.post(this.url,UsersData);
  }

  delete(_id): Observable<any>{
    return this.http.delete(`${this.url}/${_id}`);
  }

edit(_id,userObj){

 return this.http.patch(`${this.url}/${_id}`,userObj)

}


}
