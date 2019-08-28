import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UploadRecipeService {
  constructor(private http: HttpClient ){}

  url = "http://127.0.0.1:5003/api/upload/recipe";


 getRecipes():Observable<any>{
   return this.http.get(this.url);
 }

 


  // add(recipesDataObj) {
  //   // console.log(recipesData);
  //   // const recipesData = {
  //   //   recipe_name: recipesDataObj.recipe_name,
  //   //   recipe_description: recipesDataObj.recipe_description,
  //   //   // recipe_img: recipesDataObj.recipe_img,
  //   //   recipe_no_of_persons: recipesDataObj.recipe_no_of_persons,
  //   //   recipe_kilo_grams: recipesDataObj.recipe_kilo_grams,
  //   //   ing_primary_ingredients: recipesDataObj.ing_primary_ingredients,
  //   //   ing_secondary_ingredients: recipesDataObj.ing_secondary_ingredients,

  //   //   created_by: "krishna"
  //   // };

  //   const HttpUploadOptions = {
  //     headers: new HttpHeaders({ "Content-Type": "multipart/form-data" })
  //   }

  //   // const HttpUploadOptions = {
  //   //   headers: new HttpHeaders({ "Accept": "application/json" })
  //   // }
  //   let a = JSON.stringify(recipesDataObj.ing_primary_ingredients)
  //   // let b = JSON.parse(recipesDataObj.ing_primary_ingredients)

  //   // console.log(a)
  //   // console.log(b)
  //   // return this.http.post(this.url, recipesData);
  // }
}
