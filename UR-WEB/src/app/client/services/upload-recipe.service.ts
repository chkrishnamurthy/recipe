import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from '../../account/service/login.service';

@Injectable({
  providedIn: "root"
})
export class UploadRecipeService {
  constructor(private http: HttpClient,private loginService:LoginService ){}

  url = "http://127.0.0.1:5003/api/upload/recipe";
  

  getAll() {
    return this.http.get<any[]>(this.url);
  }

  add(recipe) {
    let currentUser = this.loginService.currentUserValue;
    
    recipe.append("created_by",currentUser.username);
    const options = {} as any
    return this.http.post(this.url, recipe, options);
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }




}
