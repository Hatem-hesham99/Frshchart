import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData:any = null

  constructor( private httpClient:HttpClient, private router:Router ) { }

  //login and register
  registerForm(data:object):Observable<any> {
    return this.httpClient.post(`${environment.basUrl}/api/v1/auth/signup`,data);
  }

  loginForm(data:object):Observable<any>{
    return this.httpClient.post(`${environment.basUrl}/api/v1/auth/signin`,data);
  }


  //take user data from token
  saveUserData(){

    if(localStorage.getItem('token') !== null ){
      this.userData = jwtDecode(localStorage.getItem('token')!);  
    }
  }


  //logoutfun
  logout():void{
      localStorage.removeItem('token');
      this.userData =null;
      this.router.navigate(['/login'])
  }
  //reset password 

  forgotPassAPI(data:object):Observable<any>{
   return this.httpClient.post(`${environment.basUrl}/api/v1/auth/forgotPasswords`,data)
  }
  verifyCodeAPI(data:object):Observable<any> {
    return this.httpClient.post(`${environment.basUrl}/api/v1/auth/verifyResetCode`,data)
  }
  resetPassAPI(data:object):Observable<any>{
   return this.httpClient.put(`${environment.basUrl}/api/v1/auth/resetPassword`,data)
  }

}
