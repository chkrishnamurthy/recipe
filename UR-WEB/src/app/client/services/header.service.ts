import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http:HttpClient) { }

  url="http://127.0.0.1:5003/api/users";

  add(user){
    const UsersData = {
      user_name: user.user_name,
      email:  user.email,
      password:  user.password,
      role_code:  user.role_code,
      user_code: "user",
      created_by: "user"
    }
    return this.http.post(this.url,UsersData);
  }

  edit(_id,userObj){
    // console.log(userObj);
    // console.log(_id);

    // console.log(`${this.url}/${_id}`);
    return this.http.patch(`${this.url}/${_id}`,userObj)


  }


}
