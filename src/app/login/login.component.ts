import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private data:DataService,private toastr:ToastrService,
    private router:Router,private authService : AuthService) { }

  public loginForm : FormGroup
  public submitted : boolean = false
  ngOnInit() {
    this.loginForm = this.fb.group({
      userLoginEmail : ['',Validators.required],
      userLoginPassword : ['',Validators.required]
    })
  }

  loginFormData(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    //console.log(this.loginForm.value)
    this.data.loginData(JSON.stringify(this.loginForm.value)).subscribe(result=>{
      console.log(result)//sessionUserEmail
      if(result['status'] == "success"){
        this.router.navigate(['dashboard']);
        this.toastr.success(result['successMsg'],'success');
        this.authService.userSetToken(result['sessionUserEmail'])
      }
      else{
        this.toastr.error(result['errorMsg'],'Error')
      }
    },
    error => this.toastr.error(error)
    )
  }
}

