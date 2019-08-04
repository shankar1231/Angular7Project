import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router, private toastr : ToastrService) {

   }
  userSetToken(emailToken){
    return localStorage.setItem('token',emailToken);
  }
  userGetToken(){
    return localStorage.getItem('token');
  }
  isLogginUser(){
    return localStorage.getItem('token') != null;
  }
  removeToken(){
    return localStorage.removeItem('token')
  }
  logout(){
    this.removeToken()
    this.router.navigate(['/login'])
    this.toastr.success('logout successfully','success')
  }
}
