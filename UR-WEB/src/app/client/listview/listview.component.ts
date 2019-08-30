import { Component, OnInit,Input } from '@angular/core';
import { UploadRecipeService} from '../services/upload-recipe.service';
import { SingleRecipeService } from '../services/single-recipe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  recipesData = [];
  serverUrl = "http://127.0.0.1:5003";


  constructor(private uploadRecipeService:UploadRecipeService,private data:SingleRecipeService) {
    this.uploadRecipeService.getPublished_list().subscribe(published_list =>{
      this.recipesData = published_list.recipieList;
    })
   }


  ngOnInit() {
  }


  selectedItem(_id){
    this.data.select_id(_id);
  }
 
  


}
