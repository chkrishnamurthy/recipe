import { Component, OnInit } from "@angular/core";
import { RolesService } from "../services/roles.service";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-rolescontent",
  templateUrl: "./rolescontent.component.html",
  styleUrls: ["./rolescontent.component.css"]
})
export class RolescontentComponent {
  roles = [];
  role_add_form: FormGroup;
  edit_Id;

  constructor(private rolesService: RolesService, private fb: FormBuilder) {}

  ngOnInit() {
    this.getRolesdata();

    this.role_add_form = this.fb.group({
      role_name: ["", Validators.required],
      role_code: ["", Validators.required]
    });
  }

  getRolesdata() {
    this.rolesService.getRoles().subscribe(rolesData => {
      this.roles = rolesData.RolesList;
      // console.log(this.roles);
    });
  }

  onSubmit() {
    // console.log(this.role_add_form.value);
    this.rolesService
      .add(this.role_add_form.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log("Success");
          this.getRolesdata();
        },
        error => {
          console.log("Error", error);
        }
      );
  }

  delete_Role_Record(_id) {
    this.rolesService
      .delete(_id)
      .pipe(first())
      .subscribe(
        data => {
          this.getRolesdata();
        },
        error => {
          console.log("Error", error);
        }
      );
  }

  edit_Role_Record(_id, index_id) {
    const role_Field = this.roles[index_id];
    this.edit_Id = _id;
    // console.log(role_Field);
    // console.log(_id);
    // console.log(index_id);

    this.role_add_form = this.fb.group({
      role_name: [role_Field.role_name, Validators.required],
      role_code: [role_Field.role_code, Validators.required]
    });

    // console.log(this.role_add_form.value);
  }

  edit_Submit() {
    this.rolesService
      .edit(this.edit_Id, this.role_add_form.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log("Updated");
          this.getRolesdata();
        },
        error => {
          console.log("Error=> ", error);
        }
      );
  }
}
