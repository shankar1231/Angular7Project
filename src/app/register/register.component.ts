import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { passwordMatch } from '../customValidators/passwordMatch';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,private data:DataService,private toastr:ToastrService,
    private router:Router) { }

  public countriesList:any[]= [
    {
      "countryId" : 1,
      "countryName" : "India"
    },
    {
      "countryId" : 2,
      "countryName" : "Japan"
    },
    {
      "countryId" : 3,
      "countryName" : "Sigapoor"
    }
  ]

  courseList = [
    {
      "courseId" : 0,
      "courseName" : "Angular"
    },
    {
      "courseId" : 1,
      "courseName" : "Java"
    },
    {
      "courseId" : 2,
      "courseName" : "PHP"
    }
  ]

  regForm : FormGroup;
  sucessMsg:string; 
  errorMsg:string; 
  submitted = false;

  ngOnInit() {
    this.countriesList.unshift({
      "countryId" : 0,
      "countryName" : "select country"
    })
    this.regForm = this.fb.group({
      userName : ['',[Validators.required,Validators.minLength(3)]],
      userEmail : [''],
      userPwd : ['',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/)]],
      userConfirmPwd : ['',Validators.required],
      userMobile:[''],
      countries:['',Validators.required],
      optradio:[''],
      termsConditions:['',Validators.requiredTrue]
      //courseArray : this.fb.array([]),
     // courseData : this.fb.array([],[checkboxValidator]),
    },{
      validator: passwordMatch('userPwd', 'userConfirmPwd')
    })
  } 

  regFormData(){
    this.submitted = true;
  
    //stop here if form is invalid
    if (this.regForm.invalid) {
          return;
      }
    console.log(this.regForm.value)
    this.data.registerData(JSON.stringify(this.regForm.value))
    .subscribe(result=>{
      if(result['success'] == "success"){
        this.sucessMsg = result['msg'];
        this.toastr.success(result['msg'],'success')
        this.router.navigate(['/login'])
      }
    },error=>this.errorMsg = error.statusText)
  } 
}
