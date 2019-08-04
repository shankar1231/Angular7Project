import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  public genderButtons = [
    {
      'id':1,
      'gender' : 'Male'
    },
    {
      'id':2,
      'gender' : 'FeMale'
    },
  ]
  public countriesList =[
    {
      "countryId" :1,
      "countryName" : 'India'
    },
    {
      "countryId" :2,
      "countryName" : 'Japan'
    }
  ]
  
  public testForm;
  ngOnInit() {
    this.testForm = this.fb.group({
      userName : [],
      gender : [],
      country:[],
      city:[]
    })
  }

  private genderType :string="";
  onItemChange(event:string):void{
    this.genderType = event;
  }
  
  radioButtonSeleted(radioButtonName:string):boolean{
    if(!this.genderType){
      return false;
    }
    return (this.genderType === radioButtonName)
  }

  testFormData(){
    console.log(this.testForm.value)
    this.testForm.reset()
  }

}
