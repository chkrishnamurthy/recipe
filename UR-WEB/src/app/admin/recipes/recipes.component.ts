import { Component, OnInit } from '@angular/core';
import { ApproveRecipesService } from '../services/approve-recipes.service';
import { first } from "rxjs/operators";



@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipesList = [];
  publish_Visible = true;
  is_publish = [];

  a;
  takingfalse;

  constructor(private approveRecipesService:ApproveRecipesService) { }

  ngOnInit() {
    this.getrecipesData();
  }

  getrecipesData(){
    this.approveRecipesService.getRecipes().subscribe(recipesData=>{
      this.recipesList = recipesData.recipieList;
    })
  }

  publish(_id,publish_Done_Not){

let publishing_Value = "no";

    if(publish_Done_Not.value == "no"){
      publishing_Value = "yes";
    }

    this.approveRecipesService.edit_Publish(_id,publishing_Value)
    .pipe(first())
      .subscribe(
        data => {
          // console.log("Published");
          this.getrecipesData();
        },
        error => {
          console.log("Error=> ", error);
        }
      );

  }
  
  

}
