import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient: HttpClient) { }

  // getUserNameByPassword(user: User):Observable<any>{
  //   alert(user.UserName);
  //   alert(user.UserPassword);
    
  //   return this.httpClient.get(environment.roleurl+"/api/Users/auth?userName="+user.UserName+"&passWord="+user.UserPassword)
  // }

  public loginVerify(user:User)
  {
    return this.httpClient.post(environment.roleUrl+"/api/login/token",user);

  }
 
  public logOut()
  {
    localStorage.removeItem('USERNAME');
    localStorage.removeItem('USERROLE');
    sessionStorage.removeItem('USERNAME');
    sessionStorage.removeItem('jwttoken');
  }

}
