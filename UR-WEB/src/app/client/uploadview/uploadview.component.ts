import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder, FormArray} from '@angular/forms';
import { UploadRecipeService } from '../services/upload-recipe.service';
import { first } from "rxjs/operators";



@Component({
  selector: 'app-uploadview',
  templateUrl: './uploadview.component.html',
  styleUrls: ['./uploadview.component.css']
})
export class UploadviewComponent implements OnInit {

  constructor(private fb:FormBuilder){

  }
  ngOnInit(){

  }

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
      
    ])
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }


  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit(){
    console.log(this.profileForm.value);
  }


}









// ngOnInit() {

//   this.uploadForm = new FormGroup({
//     recipe_name: new FormControl(""),
//     recipe_description:new FormControl(""),
//     // recipe_img:new FormControl(""),
//     recipe_no_of_persons:new FormControl(""),
//     recipe_kilo_grams:new FormControl(""),

//     ing_primary_ingredients: new FormGroup({
//       ing_name: new FormControl(''),
//       ing_qty: new FormControl(''),
//       ing_unit: new FormControl(''),
//     }),

//     ing_secondary_ingredients: new FormGroup({
//       ing_name: new FormControl(''),
//       ing_qty: new FormControl(''),
//       ing_unit: new FormControl(''),
//     })
   


//   })

//   // this.uploadForm = this.fb.group({



    
//   //   recipe_name:['',Validators.required],
//   //   recipe_description:['',Validators.required],
//   //   recipe_img_path:['',Validators.required],
//   //   recipe_no_of_persons:['',Validators.required],
//   //   recipe_kilo_grams:['',Validators.required],
//   //   // primary_ingredients:['',Validators.required],
//   //   // secondary_ingredients:['',Validators.required],
//   //   // created_by:['',Validators.required],
//   //   address: new FormGroup({
//   //     street: new FormControl(''),
//   //     city: new FormControl(''),
//   //     state: new FormControl(''),
//   //     zip: new FormControl('')
    
//   // })
// }


// onSubmit(){
// console.log(this.uploadForm.value);

// this.uploadRecipeService.add(this.uploadForm.value)
// // .pipe(first())
// // .subscribe(
// //   data => {
// //     console.log("Success");
// //     data
// //   },
// //   error => {
// //     console.log("Error", error);
// //   }
// // );

// }
