import { Component, OnInit } from '@angular/core';
import { SingleRecipeService } from '../services/single-recipe.service';
import { first } from "rxjs/operators";
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.css']
})
export class DetailviewComponent implements OnInit {

  current_Selected_Recipe_Id;
  constructor(private data:SingleRecipeService,private route:ActivatedRoute) {
    this.route.queryParams
    .subscribe(params => {
     this.current_Selected_Recipe_Id = params._id;
    });
   }


   singleRecipeData = {};
   serverUrl = "http://127.0.0.1:5003";


  ngOnInit(){
  // localStorage.setItem("currentSelectedRecipe",this.data.selectedItem);
    // this.current_Selected_Recipe_Id =  localStorage.getItem("currentSelectedRecipe");
    this.getData();
  }

  getData(){
    this.data.getselectedRecipe(this.current_Selected_Recipe_Id)
    .pipe(first())
     .subscribe(
         singleData => {
          // console.log("SingleData",singleData);
          this.singleRecipeData=singleData.recipeItem;
          // console.log(this.singleRecipeData);
       },
         error => {
            console.log("ERROR user data:", error);
         });
  }



}
