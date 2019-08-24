import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from '../../account/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  current_User;
  url="http://127.0.0.1:5003/api/roles";

  constructor(private http: HttpClient,private loginService:LoginService) { 
    // this.current_User =  this.loginService.currentUserValue.userobj.user_name;
  } 

  getRoles(): Observable<any> {
    return this.http.get(this.url);
  }

  
add(role){
  const RolesData = {
    role_name:role.role_name,
    role_code:role.role_code,
    created_by:"test2"
  }
  return this.http.post(this.url,RolesData);
}

delete(_id): Observable<any>{
  return this.http.delete(`${this.url}/${_id}`);
}

edit(_id,roleobj){
  return this.http.patch(`${this.url}/${_id}`,roleobj);
}


}
