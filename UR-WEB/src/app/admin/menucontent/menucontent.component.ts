import { Component, OnInit } from "@angular/core";
import { MenusService } from "../services/menus.service";
import {  FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";


@Component({
  selector: 'app-menucontent',
  templateUrl: './menucontent.component.html',
  styleUrls: ['./menucontent.component.css']
})
export class MenucontentComponent implements OnInit {


  menu_add_form: FormGroup;
  success_Message = false;
  deleted_message = false;
  edit_Id;

  menus = [];
  constructor(private menusService: MenusService, private fb: FormBuilder) {}

  ngOnInit() {
    this.getMenusdata();
    this.menu_add_form = this.fb.group({
      menu_name: ["", Validators.required],
      menu_code: ["", Validators.required],
      menu_description: ["", Validators.required],
      menu_url: ["", Validators.required]
    });

  }

  getMenusdata() {

     this.menusService.getMenus().subscribe(menusData => {
       this.menus = menusData.menuData;
     });
  }

  delete_Menu_Record(_id){
      this.menusService.delete(_id).pipe(first()).subscribe(data=>{

        this.deleted_message = false;
        this.success_Message = false;
      let clear_Message = setInterval(()=>{
       this.deleted_message = true;
      })
      setTimeout(()=>{
       clearInterval(clear_Message)
       this.deleted_message = false;
      },5000)
      this.getMenusdata();

    },
    error => {
      console.log("Error", error);
    });
  }

  onSubmit() {
    this.menusService
      .add(this.menu_add_form.value)
      .pipe(first())
      .subscribe(
        data => {
        
          this.success_Message = true;
         let clear_Message = setInterval(()=>{
          this.success_Message = true;
         })
         setTimeout(()=>{
          clearInterval(clear_Message)
          this.success_Message = false;
         },5000)

          this.getMenusdata();
        },
        error => {
          console.log("Success date==>", error);
        }
      );
  }
 

  edit_Menu_Record(_id,index_id){
    const menu_Field = this.menus[index_id]
    this.edit_Id = _id;
    this.menu_add_form = this.fb.group({
      menu_name: [menu_Field.menu_name, Validators.required],
      menu_code: [menu_Field.menu_code, Validators.required],
      menu_description: [menu_Field.menu_description, Validators.required],
      menu_url: [menu_Field.menu_url, Validators.required],
      created_by: [menu_Field.created_by, Validators.required]
    });
   
  }

  edit_Submit(){
        this.menusService
      .edit(this.edit_Id,this.menu_add_form.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log("Updated");
          this.getMenusdata();
          
          this.success_Message = true;
         let clear_Message = setInterval(()=>{
          this.success_Message = true;
         })
         setTimeout(()=>{
          clearInterval(clear_Message)
          this.success_Message = false;
         },5000)
        },
        error => {
          console.log("Error=> ", error);
        }
      );
  }



}
