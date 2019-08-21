import { Component, OnInit } from "@angular/core";
import { MenusService } from "../services/menus.service";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-menus",
  templateUrl: "./menus.component.html",
  styleUrls: ["./menus.component.css"]
})
export class MenusComponent implements OnInit {
  menu_add_form: FormGroup;

  menus = [];
  constructor(private menusService: MenusService, private fb: FormBuilder) {}

  ngOnInit() {
    this.getMenusdata();
    this.menu_add_form = this.fb.group({
      menu_name: ["", Validators.required],
      menu_code: ["", Validators.required],
      menu_description: ["", Validators.required],
      menu_url: ["", Validators.required],
      created_by: ["", Validators.required]
    });
  }

  getMenusdata() {
    this.menusService.getMenus().subscribe(menusData => {
      this.menus = menusData.menuData;
    });
  }

  onSubmit() {
    console.log(this.menu_add_form.value);

    this.menusService
      .add(this.menu_add_form.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log("Success date");
        },
        error => {
          console.log("Success date==>", error);
        }
      );
  }


  delete_Menu_Record(_id){
    console.log(_id);

    this.menusService.delete(_id).pipe(first()).subscribe(data=>{
      console.log("Success date");
    },
    error => {
      console.log("Success date==>", error);
    });
  }



  
}
