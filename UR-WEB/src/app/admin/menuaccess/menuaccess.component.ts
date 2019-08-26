import { Component, OnInit } from "@angular/core";
import { MenuaccessService } from "../services/menuaccess.service";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { RolesService } from "../services/roles.service";
import { MenusService } from "../services/menus.service";

@Component({
  selector: "app-menuaccess",
  templateUrl: "./menuaccess.component.html",
  styleUrls: ["./menuaccess.component.css"]
})
export class MenuaccessComponent implements OnInit {
  menuaccess_Data = [];
  menuaccess_add_form: FormGroup;
  roles = [];
  menus = [];
  edit_Id;

  constructor(
    private menuaccessService: MenuaccessService,
    private fb: FormBuilder,
    private rolesService: RolesService,
    private menusService: MenusService
  ) {}

  ngOnInit() {
    this.getmenuaccess_Data();
    this.menuaccess_add_form = this.fb.group({
      role_code: ["", Validators.required],
      menu_code: ["", Validators.required],
      "access_create":[""],
      "access_read":[""],
      "access_update":[""],
      "access_delete":[""] 

      // myValues: _fb.array([true, "", true])
    });

    this.rolesService.getRoles().subscribe(rolesData => {
      this.roles = rolesData.RolesList;
    });
    this.menusService.getMenus().subscribe(menusData => {
      this.menus = menusData.menuData;
    });
  }

  getmenuaccess_Data() {
    

    this.menuaccessService.getmenuaccess().subscribe(data => {
      // console.log(data.List);
      this.menuaccess_Data = data.List;
      // console.log(this.menuaccess_Data);
    });
    // console.log(this.menuaccess_Data);
  }

  
  onSubmit() {
    this.menuaccessService.add(this.menuaccess_add_form.value)
    .pipe(first())
      .subscribe(
        data => {
          this.getmenuaccess_Data();
          console.log("Success");
          console.log(data);
        },
        error => {
          console.log("Error", error);
        }
      );

    }

    delete_Record(_id){
      this.menuaccessService.delete(_id).pipe(first()).subscribe(data=>{
      this.getmenuaccess_Data();
      console.log("krishna");
    },
    error => {
      console.log("Error", error);
    });
  }

  edit_MenuAccess_Record(_id, index_id) {
   
    this.menuaccessService.add(this.menuaccess_add_form.value)

    const menuAccess_Field = this.menuaccess_Data[index_id];
    this.edit_Id = _id;
    menuAccess_Field.action = [];
    console.log(menuAccess_Field.action);
    console.log(this.edit_Id);
  }

  edit_Submit() {

    let check = this.menuaccess_add_form.value;
    this.menuaccessService
      .edit(this.edit_Id, check)
      .pipe(first())
      .subscribe(
        data => {
          console.log("Updated");
          this.getmenuaccess_Data();
        },
        error => {
          console.log("Error", error);
        }
      );
  }



 
}
