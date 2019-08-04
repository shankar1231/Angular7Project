import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//global error handler
import { GlobalErrorHandler } from './shared/error.handler';

// 3rd party modules
import { ToastrModule } from 'ngx-toastr';
import { FileSelectDirective } from 'ng2-file-upload';
import { NgxElectronModule } from 'ngx-electron'; 
// angular material 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SlidersComponent } from './sliders/sliders.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { TestFormComponent } from './test-form/test-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SlidersComponent,
    ProductFormComponent,
    FileUploadComponent,
    FileSelectDirective,
    TestFormComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      easing:'ease-in',
      closeButton : true,
      progressBar:true
    }),
    BrowserAnimationsModule,
    DragDropModule,
    NgxElectronModule 

  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : GlobalErrorHandler,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
