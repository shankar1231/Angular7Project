import { HttpErrorResponse, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Injectable,Injector } from '@angular/core';
import { Token } from '@angular/compiler';

const header_token_key = "Authorization"
@Injectable()
export class GlobalErrorHandler implements HttpInterceptor{
    constructor(private injector : Injector, private authService : AuthService){}
    intercept(req:HttpRequest<any>,next:HttpHandler) : Observable <HttpEvent<any>>{
        let myRequst = req ;
        //let authService = this.injector.get(AuthService)
        let token = this.authService.userGetToken();
        if(token != null){
            myRequst = req.clone({
                //headers : req.headers.set(header_token_key,`Bearer ${token}`)
                setHeaders :{
                    Authorization :`Bearer ${token}`
                }
            })
        }
        return next.handle(req)
        .pipe(
            catchError( (error: HttpErrorResponse) =>{
                let errorMsg ="";
                // Client Side Error
               if(error.error instanceof ErrorEvent){
                    errorMsg = `Error: ${error.error.message}`;
               }
               else{
                    errorMsg = `Error Code: ${error.status},  Message: ${error.message} , 
                    errorObject : ${error}`;
               }
                return throwError(errorMsg)
            })
        )
    }
}

