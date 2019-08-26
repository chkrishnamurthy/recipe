import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../account/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser:string;

  constructor(private loginService:LoginService) { 
    this.currentUser = this.loginService.currentUserValue.user_details.user_name;
  }

  ngOnInit() {
  }

  doLogout(){
    this.loginService.logout();
    
  }

}
