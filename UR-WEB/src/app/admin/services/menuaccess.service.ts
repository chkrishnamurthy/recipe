import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from "../../account/service/login.service";

@Injectable({
  providedIn: "root"
})


export class MenuaccessService {
  currentUser;
  constructor(private http: HttpClient,private loginService:LoginService) {
    this.currentUser = this.loginService.currentUserValue.user_details.user_name;
  }

  url = "http://127.0.0.1:5003/api/menuaction";

  getmenuaccess(): Observable<any> {
    return this.http.get(this.url);
  }


  add(menuaccess){

    // console.log(menuaccess.action)
    const accessData = {
      role_code:menuaccess.role_code,
      menu_code:menuaccess.menu_code,
      action:menuaccess.action,
      access_given_by:this.currentUser
    }

    console.log(accessData.action)
    return this.http.post(this.url,accessData);
  }

  delete(_id){
    return this.http.delete(`${this.url}/${_id}`);
  }

  edit(_id,roleobj){
    return this.http.patch(`${this.url}/${_id}`,roleobj);
  }



}
