import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient,HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SingleRecipeService {

  constructor(private http:HttpClient) { }
  url = "http://127.0.0.1:5003/api/recipe/single";


  getselectedRecipe(_id){
    // console.log(_id);
    return this.http.get<any>(`${this.url}/${_id}`);

  }

}
