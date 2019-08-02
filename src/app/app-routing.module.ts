import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FindBusinessComponent } from './find-business/find-business.component';
import { RegistercustomerRegisterComponent } from './register/registercustomer-register/registercustomer-register.component';
import { RegisterbusinessRegisterComponent } from './register/registerbusiness-register/registerbusiness-register.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
  { path:'findbusiness', component:FindBusinessComponent },
  { path:'register/business', component:RegisterbusinessRegisterComponent },
  { path:'register/customer', component:RegistercustomerRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
