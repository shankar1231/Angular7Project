import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private httpClient : HttpClient, private injector:Injector) { }

  private webApiRegister = "http://localhost/angularCodeignator/register"
  private webApiLogin = "http://localhost/angularCodeignator/login"

  // public httpHeaders =  new HttpHeaders({
  //   'Content-Type': 'application/json'
  // })

  registerData(user){
    return this.httpClient.post(this.webApiRegister,user)
  }



  loginData(user){
    return this.httpClient.post(this.webApiLogin,user)
    .pipe(
      tap(tokens =>console.log("from service : ",user))
    )
  }
  

  // using json server

  private productsApi = "http://localhost:3000/products/";

  getAllProducts(){
    return this.httpClient.get(this.productsApi).pipe(map(res=>res))
  }
  postProductsData(data){
    console.log("comming from services : " + data)
    return this.httpClient.post(this.productsApi,data)
  }  
  getSingleProdcut(proId){
    console.log(this.productsApi,proId)
    return this.httpClient.get(this.productsApi+proId)
  }
}




// map(data=>{
//   if(data){
//     localStorage.setItem('currentUser',JSON.stringify(user))
//   }
//   return user;
// })