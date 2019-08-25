import { Component, OnInit } from '@angular/core';
import { MenuaccessService } from '../services/menuaccess.service';
import {  FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";



@Component({
  selector: 'app-menuaccess',
  templateUrl: './menuaccess.component.html',
  styleUrls: ['./menuaccess.component.css']
})
export class MenuaccessComponent implements OnInit {

  menuaccess_Data= [];
  menuaccess_add_form: FormGroup;


  constructor(private menuaccessService:MenuaccessService, private fb: FormBuilder) {
    
    }

  ngOnInit() {
    this.getmenuaccess_Data();
    this.menuaccess_add_form = this.fb.group({
      role_code: ["", Validators.required],
      menu_code: ["", Validators.required]
    });
  }

  getmenuaccess_Data(){
    this.menuaccessService.getmenuaccess().subscribe(data=>{
      // console.log(data.List);
      this.menuaccess_Data = data.List
      console.log(this.menuaccess_Data);

    })
      console.log(this.menuaccess_Data);
    
  }

}
