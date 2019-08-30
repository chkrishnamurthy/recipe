import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from '../../account/service/login.service';

@Injectable({
  providedIn: "root"
})
export class UploadRecipeService {
  
  constructor(private http: HttpClient,private loginService:LoginService ){
  }

  url = "http://127.0.0.1:5003/api/upload/recipe";
  published_list = "http://127.0.0.1:5003/api/published_list/recipe";
  

  getPublished_list():Observable<any> {
    return this.http.get(this.published_list);
  }

  add(recipe) {
    let currentUser = this.loginService.currentUserValue.user_details.user_name;

    recipe.append("created_by",currentUser);
    recipe.append("is_published","no");

    const options = {} as any
    return this.http.post(this.url, recipe, options);
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }




}
