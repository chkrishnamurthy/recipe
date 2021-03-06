import { Component, OnInit } from "@angular/core";
import { UsersService } from "../services/users.service";
import { RolesService } from "../services/roles.service";
import { LoginService } from "../../account/service/login.service";

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { first } from "rxjs/operators";

@Component({
  selector: "app-userscontent",
  templateUrl: "./userscontent.component.html",
  styleUrls: ["./userscontent.component.css"]
})
export class UserscontentComponent implements OnInit {
  user_add_form: FormGroup;
  edit_Id;
  users = [];
  roles = [];
  currentUser;
  currentUserAction:any = {create: false, 
                              delete: false, 
                              read: false, 
                              update: false}

  constructor(private usersService: UsersService, private fb: FormBuilder,private rolesService:RolesService,private loginService:LoginService) {
    
  }

  ngOnInit() {
    this.getUsersdata();
    this.getRolesdata();
    this.user_add_form = this.fb.group({
      user_name: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      role_code: "user",
      user_code: ["", Validators.required],
      created_by: ["", Validators.required]
    });

    this.getActionsList();
  }

  getUsersdata() {
    this.usersService.getUsers().subscribe(usersdata => {
      this.users = usersdata.usersList;
    });

  }
  

  getRolesdata() {
    this.usersService.getRoles().subscribe(data => {
      this.roles = data.RolesList;
      // this.roles.splice(0,1)
      // console.log(this.roles);
    });
  }

 

  onSubmit() {
    // console.log(this.user_add_form.value)
    this.usersService
      .add(this.user_add_form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.getUsersdata();
          console.log("Success");

        },
        error => {
          console.log("Error", error);
        }
      );
  }

  delete_User_Record(_id) {
    this.usersService
      .delete(_id)
      .pipe(first())
      .subscribe(
        data => {
          console.log("Deleted");
          this.getUsersdata();
        },
        error => {
          console.log("Error", error);
        }
      );
  }

  edit_User_Record(_id, index_id) {
    const users_Field = this.users[index_id];
    // console.log(users_Field);
    // console.log(_id);
    // console.log(index_id);

    this.edit_Id = _id;
    this.user_add_form = this.fb.group({
      user_name: [users_Field.user_name, Validators.required],
      email: [users_Field.email, Validators.required],
      password: [users_Field.password, Validators.required],
      role_code: [users_Field.role_code, Validators.required],
      user_code: [users_Field.user_code, Validators.required]
    });

    console.log(this.user_add_form.value);
  }

  edit_Submit(){
    this.usersService
  .edit(this.edit_Id,this.user_add_form.value)
  .pipe(first())
  .subscribe(
    data => {
      console.log("Updated");
      this.getUsersdata();
    
    },
    error => {
      console.log("Error=> ", error);
    }
  );
}



private getActionsList(){
  this.usersService.getActions().pipe(first()).subscribe(action => {     
   
      this.currentUserAction = JSON.parse((action as any).roleCollection.filter(function(a:any){
            // console.log(a);
                        // console.log(a.menu_code)
        return (a.menu_code === "users");
      })[0].action);

      // console.log("User ACTIONS-currentUserAction", this.currentUserAction);

  });
}



}
