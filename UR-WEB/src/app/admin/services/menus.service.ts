import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MenusService {
  constructor(public http: HttpClient) {}

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
    created_by:menu.created_by
  }
  return this.http.post(this.url,menusData);

}

delete(_id){
  return this.http.delete(`${this.url}/${_id}`);
}

  
}
