import { Component, OnInit } from '@angular/core';
import { ApproveRecipesService } from '../services/approve-recipes.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipesList = [];
  constructor(private approveRecipesService:ApproveRecipesService) { }

  ngOnInit() {
    this.getrecipesData();
  }

  getrecipesData(){
    this.approveRecipesService.getRecipes().subscribe(recipesData=>{
      console.log(recipesData.recipieList);
      this.recipesList = recipesData.recipieList;
    })
  }

}
