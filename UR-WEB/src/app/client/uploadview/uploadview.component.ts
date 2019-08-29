import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { UploadRecipeService } from '../services/upload-recipe.service';
import { first } from 'rxjs/operators';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

class IngridientsPoint {
  "ing_name": string;
  "ing_qty": number;
  "ing_unit": string;
}



@Component({
  selector: 'app-uploadview',
  templateUrl: './uploadview.component.html',
  styleUrls: ['./uploadview.component.css']
})
export class UploadviewComponent implements OnInit {

  registerForm: FormGroup;
  fileData: File = null;
  selectedFile: ImageSnippet;

  constructor(private formBuilder: FormBuilder,
    private uploadRecipeService:UploadRecipeService){

  }
  ngOnInit(){

    this.registerForm = this.formBuilder.group({
      recipeName: ['', Validators.required],
      recipeDescription: ['', Validators.required],
      recipeWeight: ['', Validators.required],
      recipePersons: ['', Validators.required],
      recipefile:[''],
      ing_primary_ingredients:this.formBuilder.array([this.formBuilder.group({
                                                    ing_name: [''],
                                                        ing_qty: [''],
                                                        ing_unit:[''],
                                                        })
                                                    ]),
      ing_secondary_ingredients:this.formBuilder.array([this.formBuilder.group({
                                                      ing_name: [''],
                                                      ing_qty: [''],
                                                      ing_unit:[''],
                                                      })
                                                  ])
   });

  }

  fileProgress(fileInput: any) {
    const file: File = fileInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
    });
    reader.readAsDataURL(file);
  }

  get ing_primary_ingredients() {
    return this.registerForm.get('ing_primary_ingredients') as FormArray;
  }

  add_primary_ingredients() {
    this.ing_primary_ingredients.push(this.formBuilder.group({
                                                              ing_name: [''],
                                                              ing_qty: [''],
                                                              ing_unit:[''],
                                                              }));
  }

  delete_primary_ingredients(index) {
    this.ing_primary_ingredients.removeAt(index);
  }



  get ing_secondary_ingredients() {
    return this.registerForm.get('ing_secondary_ingredients') as FormArray;
  }

  add_secondary_ingredients() {
    this.ing_secondary_ingredients.push(this.formBuilder.group({
                                                              ing_name: [''],
                                                              ing_qty: [''],
                                                              ing_unit:[''],
                                                              }));
  }

  delete_secondary_ingredients(index) {
    this.ing_secondary_ingredients.removeAt(index);
  }

  


  get f() { return this.registerForm.controls; }

   onSubmit() {
     // stop here if form is invalid
     if (this.registerForm.invalid) {
         return;
     }

     let other ={ "ing_primary_ingredients": [
      {
        "ing_name": "chillis",
        "ing_qty": 4,
        "ing_unit": "unit"
      },
      {
        "ing_name": "chillis",
        "ing_qty": 4,
        "ing_unit": "unit"
      }
    ],
    "ing_secondary_ingredients": [
      {
        "ing_name": "chillis",
        "ing_qty": 4,
        "ing_unit": "unit"
      },
      {
        "ing_name": "chillis",
        "ing_qty": 4,
        "ing_unit": "unit"
      }
    ]}

    let recipeObj = {
      "recipe_name": this.registerForm.value.recipeName,
      "recipe_description": this.registerForm.value.recipeDescription,
      "recipe_no_of_persons": this.registerForm.value.recipePersons,
      "recipe_kilo_grams": this.registerForm.value.recipeWeight 
    }

    const formData = new FormData();

    formData.append('recipe_img', this.selectedFile.file);

    Object.keys(recipeObj).forEach(key => {
      formData.append(key, recipeObj[key]);
    });

    Object.keys(this.registerForm.value).forEach(key => {
      let y = formData.append(key, JSON.stringify(this.registerForm.value[key]));
      // console.log(y);

    });

    // console.log("formData", formData);
    // console.log("Revision", this.registerForm.value);

    this.uploadRecipeService.add(formData)
    .pipe(first())
    .subscribe(
        data => {
            console.log("imageposted success", data);
           //this.message= (data as any).message;
           //close();
        },
        error => {
          console.log("image post data error==>", error);
        });

   }





}






