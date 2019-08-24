import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FindBusinessComponent } from './find-business/find-business.component';
import { CustomerRegisterComponent } from './register/customer-register/customer-register.component';
import { BusinessRegisterComponent } from './register/business-register/business-register.component';
import { BusinessLoginComponent } from './login/business-login/business-login.component';
import { CustomerLoginComponent } from './login/customer-login/customer-login.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
  { path:'findbusiness', component:FindBusinessComponent },
  { path:'register/business', component:BusinessRegisterComponent },
  { path:'register/customer', component:CustomerRegisterComponent},
  { path:'login/business', component:BusinessLoginComponent },
  { path:'login/customer', component:CustomerLoginComponent},
  { path:'business', component:BusinessRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
