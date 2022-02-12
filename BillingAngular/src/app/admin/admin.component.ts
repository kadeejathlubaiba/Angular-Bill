import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../shared/auth-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  loggedUser:string;
  constructor(private authService:AuthServiceService,private router:Router) { }
  ngOnInit(): void {
      this.loggedUser=localStorage.getItem("USERNAME");
  }
//logout
logOut(){
  this.authService.logOut();
  this.router.navigateByUrl('login');
}
}