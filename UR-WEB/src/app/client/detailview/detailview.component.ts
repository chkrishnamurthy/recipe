import { Component, OnInit, Input,ViewChild, AfterViewInit } from '@angular/core';
import { SingleRecipeService } from '../services/single-recipe.service';
import { first } from "rxjs/operators";



@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.css']
})
export class DetailviewComponent implements OnInit {

  constructor(private data:SingleRecipeService) {
   }

   current_Selected_Recipe_Id;
   singleRecipeData = {};
   serverUrl = "http://127.0.0.1:5003";


  ngOnInit(){
  localStorage.setItem("currentSelectedRecipe",this.data.selectedItem);
    this.current_Selected_Recipe_Id =  localStorage.getItem("currentSelectedRecipe");
    this.getData();
  }

  getData(){
    this.data.getselectedRecipe(this.current_Selected_Recipe_Id)
    .pipe(first())
     .subscribe(
         singleData => {
          console.log("SingleData",singleData);
          this.singleRecipeData=singleData.recipeItem;
          console.log(this.singleRecipeData);

       },
         error => {
            console.log("ERROR user data:", error);
         });
  }







  

  


  


}
