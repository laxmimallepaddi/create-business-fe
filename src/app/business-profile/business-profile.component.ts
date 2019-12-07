import { Component, OnInit ,ElementRef, NgZone, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Business,BusinessType,mapBusinessTypes,countryCodes,phoneType } from '../business';
import { HttpClientService } from '../service/http-client.service';
import { Subscription } from 'rxjs';
import { FormsModule, NgForm } from '@angular/forms';
import { AlertService} from '../service/alert.service';

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.css']
})
export class BusinessProfileComponent implements OnInit,OnDestroy {

  businesstypes=BusinessType;
  countryCodes = countryCodes;
  phoneType = phoneType;
  phoneNumberCounter=1;
  addressCounter=1;
  replicateAddressCheckbox=true;
  phonenumber1=false;
  phonenumber2=false;
  officeAddress1=false;
  sameAddress=false;
  submitted = false;
  addresstypevalue = 'OFFICE';
  phonetypevalue = 'OFFICE';
  serviceproviderslist=[];

  currentBusiness: Business;
  currentBusinessSubscription: Subscription;
  model: Business;

  b_type_keys() : Array<string> {
    var keys = Object.keys(this.businesstypes);
    return keys.slice(keys.length / 2);
  }
  countryCodes_keys() : Array<string> {
    var keys = Object.keys(this.countryCodes);
    return keys;
  }
  countryCodes_values() : Array<string> {
    var values = Object.values(this.countryCodes);
    return values;
  }
  phoneType_keys() : Array<string> {
    var keys = Object.keys(this.phoneType);
    return keys.slice(keys.length / 2);
  }

  constructor(
    public router: Router,
    public activatedroute: ActivatedRoute,
    public elementRef:ElementRef,
    public httpClientService: HttpClientService,
    private ngZone: NgZone,
    private alertService: AlertService
    ) {
      this.currentBusinessSubscription = this.httpClientService.currentBusiness.subscribe(user => {
        this.currentBusiness = user;
      });
     }

  ngOnInit() {
    this.model = this.currentBusiness;
    let val= this.model.businessType;
    //console.log(val);
    this.serviceproviderslist = mapBusinessTypes(val);
    //console.log(this.serviceproviderslist);
  }
  ngOnDestroy() {
    this.currentBusinessSubscription.unsubscribe();
  }  
  
  onPhoneTypeChange(event){
    if(event.target.value=='HOME'){
      this.phonetypevalue = 'HOME';
    }
    else if(event.target.value=='OFFICE'){
      this.phonetypevalue = 'OFFICE';
    }
    else if(event.target.value=='MOBILE'){
      this.phonetypevalue = 'MOBILE';
    }
  }
  onAddressTypeChange(event){
    if(event.target.value=='HOME'){
      this.addresstypevalue = 'HOME';
    }
    else if(event.target.value=='OFFICE'){
      this.addresstypevalue = 'OFFICE';
    }
  }
  
  // new Business(null,null,null,null,null,null,null,null,null,null,"OFFICE",null,null,null,null,null,null,"HOME",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
  
  passwordsubmitted = false;
  onChangePasswordForm() { this.passwordsubmitted = true; }

  editformsubmitted = false;
  onEditForm() { this.editformsubmitted = true; }
  
  error_msg = '';
  updateBusiness(userdata){ 
    console.log(userdata);
    this.httpClientService.UpdateBusiness(userdata)
    .subscribe(data => {
      this.error_msg = "Your business details updated successfully.";
      this.ngZone.run(() => this.router.navigateByUrl('/business'));
    },
      error => {
        console.log(error);
        this.error_msg = "Unable to process your request. Please check internet connection."  
         
    }
    );
  }
  changePasswordBusiness(f: NgForm, userdata){ 
    userdata.password = userdata.newPassword;
    this.httpClientService.ChangeBusinessPassword(userdata)
    .subscribe(data => {
      this.error_msg = "Your password was updated successfully.";
      this.ngZone.run(() => this.router.navigateByUrl('/business'));
          document.getElementById('new_password').setAttribute('readonly','readonly');
          document.getElementById('confirm_new_password').setAttribute('readonly','readonly');
          this.invalidpass=false;
    },
      error => {
        console.log(error);
        this.error_msg = "Unable to process your request. Please check internet connection."  
         
    }
    );
  }
  filterServices(event){
    let val= event.target.value;
    this.serviceproviderslist = mapBusinessTypes(val);
    
  }
  doUpperCase(){
    if(this.model.primaryCountry != null)
      this.model.primaryCountry = this.model.primaryCountry.toUpperCase();
    if(this.model.primaryState != null)
      this.model.primaryState = this.model.primaryState.toUpperCase();
    if(this.model.primaryCity != null)
      this.model.primaryCity = this.model.primaryCity.toUpperCase();
    if(this.model.secondaryCountry != null)
      this.model.secondaryCountry = this.model.secondaryCountry.toUpperCase();
    if(this.model.secondaryState != null)
      this.model.secondaryState = this.model.secondaryState.toUpperCase();
    if(this.model.secondaryCity != null)
      this.model.secondaryCity = this.model.secondaryCity.toUpperCase();
  }
  show1: boolean;
  show2: boolean;
  show3: boolean;
  showPassword1(){
    this.show1 = !this.show1;
  }
  showPassword2(){
    this.show2 = !this.show2;
  }
  showPassword3(){
    this.show3 = !this.show3;
  }
  invalidpass=false;
  ifPasswordMatches(event){
    let val= event.target.value;
    if(this.currentBusiness.password==val){
      document.getElementById('new_password').removeAttribute('readonly');
      document.getElementById('confirm_new_password').removeAttribute('readonly');
      this.invalidpass=true;
    }
    else{
      document.getElementById('new_password').setAttribute('readonly','readonly');
      document.getElementById('confirm_new_password').setAttribute('readonly','readonly');
      this.invalidpass=false;
    }
  }
}
