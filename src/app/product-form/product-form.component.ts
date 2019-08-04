import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private fb:FormBuilder,private dataService : DataService,private activatedRoute:ActivatedRoute) { }

  public productForm;
  ngOnInit() {
    if(this.activatedRoute.snapshot.params.id){
      this.dataService.getSingleProdcut(this.activatedRoute.snapshot.params.id)
     .subscribe(res=>{
      this.productForm = this.fb.group({
        productTitle : [res['productTitle'],Validators.required],
        productPrice : [res['productPrice'],Validators.required]
      })
     })
    }
    else{
      this.productForm = this.fb.group({
        productTitle : ['',Validators.required],
        productPrice : ['',Validators.required]
      })
    }
    
  }
  public submitted : boolean = false;
  productFormData(){
    this.dataService.postProductsData(this.productForm.value).subscribe(res => console.log(res))
  }
}

