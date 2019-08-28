import { Component, OnInit } from '@angular/core';
import { UploadRecipeService} from '../services/upload-recipe.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  recipesData = [];
  constructor(private uploadRecipeService:UploadRecipeService) { }
  ngOnInit() {
    this.uploadRecipeService.getRecipes().subscribe(data=>{
      console.log(data.recipieList);
      this.recipesData = data.recipieList;
    });
  }



}
