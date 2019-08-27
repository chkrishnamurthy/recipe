import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms';



@Component({
  selector: 'app-uploadview',
  templateUrl: './uploadview.component.html',
  styleUrls: ['./uploadview.component.css']
})
export class UploadviewComponent implements OnInit {

  add_form:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    // this.add_form = this.fb.group({

    //   recipe_name:['',Validators.required],
    //   recipe_description:['',Validators.required],
    //   recipe_img_path:['',Validators.required],
    //   recipe_no_of_persons:['',Validators.required],
    //   recipe_kilo_grams:['',Validators.required],
    //   primary_ingredients:['',Validators.required],
    //   secondary_ingredients:['',Validators.required],
    //   created_by:['',Validators.required],

      
    // })
  }





}
