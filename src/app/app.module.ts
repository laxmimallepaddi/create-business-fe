import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FindBusinessComponent } from './find-business/find-business.component';
import { CustomerRegisterComponent } from './register/customer-register/customer-register.component';
import { BusinessRegisterComponent } from './register/business-register/business-register.component';
import { BusinessLoginComponent } from './login/business-login/business-login.component';
import { CustomerLoginComponent } from './login/customer-login/customer-login.component';

import { MustMatchDirective } from './helpers/must-match.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FindBusinessComponent,
    CustomerRegisterComponent,
    BusinessRegisterComponent,
    BusinessLoginComponent,
    CustomerLoginComponent,
    MustMatchDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
