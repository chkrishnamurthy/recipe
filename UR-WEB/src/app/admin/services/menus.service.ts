import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from '../../account/service/login.service';


@Injectable({
  providedIn: "root"
})
export class MenusService {
 
  current_User;
  constructor(public http: HttpClient,private loginService:LoginService) {
    this.current_User = this.loginService.currentUserValue.user_details.user_name;
  // console.log(this.current_User)
  }

  url="http://127.0.0.1:5003/api/menus";

  getMenus(): Observable<any> {
    return this.http.get(this.url);
  }

add(menu){
  const menusData = {
    menu_name:menu.menu_name,
    menu_code:menu.menu_code,
    menu_description:menu.menu_description,
    menu_url:menu.menu_url,
    created_by:this.current_User
  }
  return this.http.post(this.url,menusData);

}

delete(_id){
  return this.http.delete(`${this.url}/${_id}`);
}

edit(_id,obj){
  return this.http.patch(`${this.url}/${_id}`,obj);
}

  
}
