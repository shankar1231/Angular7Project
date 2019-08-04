import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { ProductFormComponent } from './product-form/product-form.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { TestFormComponent } from './test-form/test-form.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent 
  },
  {
    path : "home",
    component : HomeComponent 
  },
  {
    path : "products",
    component : ProductFormComponent 
  },
  {
    path : "products/:id",
    component : ProductFormComponent 
  },
  {
    path : "register",
    component : RegisterComponent 
  },
  {
    path : "login",
    component : LoginComponent 
  },
  {
    path : "fileupload",
    component : FileUploadComponent 
  },
  {
    path : "testForm",
    component : TestFormComponent
  },
  {
    path : "dashboard",
    component : DashboardComponent,
    canActivate : [AuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
