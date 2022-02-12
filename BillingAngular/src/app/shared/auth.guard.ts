import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot) : boolean{
    //login-local storage
    //expectd role-app.routng.module
    const expectedRole =next.data.role;
    const currentRole =localStorage.getItem('USERROLE');

    //check the condtn
    if(currentRole !== expectedRole){
      this.router.navigateByUrl('login');
      return false;
    }
      return true;
  }
}
