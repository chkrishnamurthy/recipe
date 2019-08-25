import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../account/service/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuNames = [];

  constructor(private loginService:LoginService) { }

  ngOnInit() {
    this.loginService.currentUserValue.selfMenu.map(data=>{
      this.menuNames.push(data.menu_code);
      
      console.log(this.menuNames);


    });

  }

}
