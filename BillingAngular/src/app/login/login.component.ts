import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthServiceService} from '../shared/auth-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isSubmitted=false;
  errors='';
  loginUser: any;
  constructor(private formBuilder : FormBuilder,
     private router:Router,
     private authService:AuthServiceService) {}

  ngOnInit():void {
      this.loginForm=this.formBuilder.group({ 
        UserName:['',[Validators.required]],
        UserPassword:['',[Validators.required]] } );
  }

  get formControls() {
      return this.loginForm.controls;
  }

  loginCredentials() {
      this.isSubmitted=true;
      alert("Submitted Login");
      if(this.loginForm.invalid)
      {
        return;
      }
      if(this.loginForm.valid)
      {
        this.authService.loginVerify(this.loginForm.value).subscribe(data=>{
          console.log(data);
          this.loginUser=data;

          //username,roleid, and token
          sessionStorage.setItem('jwttoken',this.loginUser.token);
          if(this.loginUser!=null)
          {
            localStorage.setItem('USERNAME',this.loginUser.UserName);
            localStorage.setItem('USERROLE',this.loginUser.RoleId);
            sessionStorage.setItem('USERNAME',this.loginUser.UserName);

          }
          alert(this.loginUser.RoleId);
          if(this.loginUser.RoleId==1)
          {
            
            this.router.navigateByUrl('/admin');
          }
          else if(this.loginUser.RoleId==2)
          {
            this.router.navigateByUrl('/manager');
          }
          else
          {
            this.router.navigateByUrl('/home');
          }
        },
        error=>{
          this.errors="Invalid username or Password"
        });
      }

  }

}
