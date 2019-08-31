import { Component, OnInit,Input } from '@angular/core';
import { UploadRecipeService} from '../services/upload-recipe.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  recipesData = [];
  serverUrl = "http://127.0.0.1:5003";


  constructor(private uploadRecipeService:UploadRecipeService) {
    this.uploadRecipeService.getPublished_list().subscribe(published_list =>{
      this.recipesData = published_list.recipieList;
    })
   }


  ngOnInit() {
  }


}
