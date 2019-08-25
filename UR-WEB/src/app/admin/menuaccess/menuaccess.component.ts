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
      action1: ["", Validators.required],
      action2: [false, Validators.required],
      action3: [false, Validators.required],
      action4: [false, Validators.required]

      // myValues: _fb.array([true, false, true])
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
    let check = this.menuaccess_add_form.value;
    let action = [];

    check.action = [];

    if (check.action1) {
      action.push("1");
      check.action = action;
    }
    if (check.action2) {
      action.push("2")
      check.action = action;
    }
    if (check.action3) {
      action.push("3");
      check.action = action;
    }
    if (check.action4) {
      action.push("4");
      check.action = action;
    }
    delete check.action1;
    delete check.action2;
    delete check.action3;
    delete check.action4;

    console.log(check.action);
    
    this.menuaccessService.add(check)
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

  // edit_MenuAccess_Record(_id, index_id) {
  //   const menuAccess_Field = this.menuaccess_Data[index_id];
  //   this.edit_Id = _id;
  //   menuAccess_Field.action = [];
  //   console.log(menuAccess_Field.action);
  //   console.log(this.edit_Id);
  // }

  // edit_Submit() {

  //   let check = this.menuaccess_add_form.value;
  //   // console.log(check);
  //   if (check.action1) {
  //     this.action.push("1");
  //     check.action = this.action;
  //   }
  //   if (check.action2) {
  //     this.action.push("2");
  //     check.action = this.action;
  //   }
  //   if (check.action3) {
  //     this.action.push("3");
  //     check.action = this.action;
  //   }
  //   if (check.action4) {
  //     this.action.push("4");
  //     check.action = this.action;
  //   }
  //   delete check.action1;
  //   delete check.action2;
  //   delete check.action3;
  //   delete check.action4;

  //   console.log(check);
  //   this.menuaccessService
  //     .edit(this.edit_Id, check)
  //     .pipe(first())
  //     .subscribe(
  //       data => {
  //         console.log("Updated");
  //         this.getmenuaccess_Data();
  //       },
  //       error => {
  //         console.log("Error", error);
  //       }
  //     );
  // }



 
}
