import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from "../../account/service/login.service";


@Injectable({
  providedIn: 'root'
})
export class ApproveRecipesService {

  constructor(private http: HttpClient) { }

  url = "http://127.0.0.1:5003/api/upload/recipe";
  publishing_url = "http://127.0.0.1:5003/api/publish/recipe";

  getRecipes():Observable<any>{
    return this.http.get(this.url)
  }

  edit_Publish(_id,is_published){
      return this.http.patch(`${this.publishing_url}/${_id}`,{is_published});
  }


}
