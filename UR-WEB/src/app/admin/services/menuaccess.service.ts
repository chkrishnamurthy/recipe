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

    console.log(menuaccess)

    const actionList = {
     create : (menuaccess.access_create)?true:false,
     read : (menuaccess.access_read)?true:false,
     update : (menuaccess.access_update)?true:false,
     delete : (menuaccess.access_delete)?true:false

    }

    // console.log();


    const accessData = {
      role_code:menuaccess.role_code,
      menu_code:menuaccess.menu_code,
      action:JSON.stringify(actionList),
      access_given_by:this.currentUser
    }

    // console.log(accessData)
    return this.http.post(this.url,accessData);
  }

  delete(_id){
    return this.http.delete(`${this.url}/${_id}`);
  }

  edit(_id,accessObj){
    const actionList = {
      create : (accessObj.access_create)?true:false,
      read : (accessObj.access_read)?true:false,
      update : (accessObj.access_update)?true:false,
      delete : (accessObj.access_delete)?true:false
     }

     const accessData = {
      role_code:accessObj.role_code,
      menu_code:accessObj.menu_code,
      action:JSON.stringify(actionList),
      access_given_by:this.currentUser
    }
    return this.http.patch(`${this.url}/${_id}`,accessData);
  }



}
