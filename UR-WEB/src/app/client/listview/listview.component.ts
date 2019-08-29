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
   
  }



}
