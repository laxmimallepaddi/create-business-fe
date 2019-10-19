import { Component, OnInit ,ElementRef, NgZone, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Business,BusinessType,BusinessPasswordChange,mapBusinessTypes } from '../../business';
import { HttpClientService } from '../../service/http-client.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AlertService} from '../../service/alert.service';

@Component({
  selector: 'app-business-register',
  templateUrl: './business-register.component.html',
  styleUrls: ['./business-register.component.css']
})
export class BusinessRegisterComponent implements OnInit,OnDestroy {
  htmlToAddPhoneNumber='';
  businesstypes=BusinessType;
  phoneNumberCounter=1;
  addressCounter=1;
  replicateAddressCheckbox=true;
  phonenumber1=false;
  phonenumber2=false;
  officeAddress1=false;
  sameAddress=false;
  submitted = false;
  addresstypevalue = 'HOME';
  phonetypevalue = 'HOME';
  serviceproviderslist:string[];

  currentBusiness: Business;
  currentBusinessSubscription: Subscription;

  b_type_keys() : Array<string> {
    var keys = Object.keys(this.businesstypes);
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
      this.show1 = false;
      this.show2 = false;
     }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.currentBusinessSubscription.unsubscribe();
  }  

  addAnotherPhoneNumber(){
    if(this.phoneNumberCounter==1 || this.phoneNumberCounter==3){
      this.phoneNumberCounter+=1;
      this.phonenumber1=true;
    }
    else if(this.phoneNumberCounter==2){
      this.phoneNumberCounter+=2;
      this.phonenumber2=true;
    }
  }
  removePhoneNumber1(){
    this.phoneNumberCounter-=1;
    this.phonenumber1=false;
  }
  removePhoneNumber2(){
    this.phoneNumberCounter-=2;
    this.phonenumber2=false;
  }

  addAnotherAddress(){
    if(this.addressCounter==1){
      this.addressCounter+=1;
      this.replicateAddressCheckbox=false;  
      this.officeAddress1=true;
      document.getElementById('another_address').setAttribute('hidden','hidden');
      document.getElementById('city_field1').classList.remove('col-sm-5');
      document.getElementById('city_field1').classList.add('col-sm-6');
    }
  }
  removeAddress(){
    this.replicateAddressCheckbox=true;
    this.addressCounter -= 1;
    this.officeAddress1 = false;
    document.getElementById('another_address').removeAttribute('hidden',);
    document.getElementById('city_field1').classList.add('col-sm-5');
    document.getElementById('city_field1').classList.remove('col-sm-6');
  }
  onChangeCheckbox(event,addressline1:string,addressline2:string,landmark:string,pincode:number,country:string,state:string,city:string){
    if(event.target.checked){
      this.sameAddress=true;
      this.model.secondaryAddressLine1=addressline1;
      this.model.secondaryAddressLine2=addressline2;
      this.model.secondaryLandmark=landmark;
      this.model.secondaryCountry=country;
      this.model.secondaryState=state;
      this.model.secondaryCity=city;
      this.model.secondaryZipCode=pincode;
      document.getElementById('city_field1').classList.remove('col-sm-5');
      document.getElementById('city_field1').classList.add('col-sm-6');
      if(this.model.primaryAddressType=="HOME") this.model.secondaryAddressType="OFFICE";
      if(this.model.primaryAddressType=="OFFICE") this.model.secondaryAddressType="HOME";
    }
    else{
      this.sameAddress=false;
      this.model.secondaryAddressLine1=null;
      this.model.secondaryAddressLine2=null;
      this.model.secondaryLandmark=null;
      this.model.secondaryCountry=null;
      this.model.secondaryState=null;
      this.model.secondaryCity=null;
      this.model.secondaryZipCode=null;
      document.getElementById('city_field1').classList.add('col-sm-5');
      document.getElementById('city_field1').classList.remove('col-sm-6');
      
    }
  }
  onAddressTypeChange(event){
    this.model.primaryAddressType=event.target.value;
    let address_matches1 = document.getElementsByClassName('address-1');
      for (let i=0; i<address_matches1.length; i++) {
        address_matches1[i].removeAttribute('readonly');
      }
    if(this.model.primaryAddressType=='HOME'){
      this.model.secondaryAddressType='OFFICE';
      let address_matches2 = document.getElementsByClassName('address-2');
      for (let i=0; i<address_matches2.length; i++) {
        address_matches2[i].removeAttribute('readonly');
      }
      this.addresstypevalue = 'HOME';
    }
    else if(this.model.primaryAddressType=='OFFICE'){
      this.model.secondaryAddressType='HOME';
      let address_matches2 = document.getElementsByClassName('address-2');
      for (let i=0; i<address_matches2.length; i++) {
        address_matches2[i].removeAttribute('readonly');
      }
      this.addresstypevalue = 'OFFICE';
    }
  }
  onAddressTypeChange1(event){
    this.model.secondaryAddressType=event.target.value;
    let address_matches2 = document.getElementsByClassName('address-2');
      for (let i=0; i<address_matches2.length; i++) {
        address_matches2[i].removeAttribute('readonly');
      }
      if(this.model.secondaryAddressType=='HOME'){
        this.model.primaryAddressType='OFFICE';
        let address_matches2 = document.getElementsByClassName('address-2');
        for (let i=0; i<address_matches2.length; i++) {
          address_matches2[i].removeAttribute('readonly');
        }
      }
      else if(this.model.secondaryAddressType=='OFFICE'){
        this.model.primaryAddressType='HOME';
        let address_matches2 = document.getElementsByClassName('address-2');
        for (let i=0; i<address_matches2.length; i++) {
          address_matches2[i].removeAttribute('readonly');
        }
      }
  }
    
  model = new Business(null,null,null,null,null,null,null,null,null,null,"OFFICE",null,null,null,null,null,null,"HOME",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
  
  onSubmit() { this.submitted = true; }
  
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

  model1 = new BusinessPasswordChange(null,null,null);
  passwordsubmitted = false;
  onChangePasswordForm() { this.passwordsubmitted = true; }

  editformsubmitted = false;
  onEditForm() { this.editformsubmitted = true; }

  createBusiness(userdata){ 
    this.httpClientService.CreateBusiness(userdata).subscribe(
      res => {
      this.alertService.success('Business registration successful.', true);
      this.ngZone.run(() => this.router.navigateByUrl('/login/business'))
    },
    error => {
      this.alertService.error('Username already exists.');
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
  show2:boolean;
  showPassword1(pswd: string){
    this.show1 = !this.show1;
  }
  showPassword2(pswd: string){
    this.show2 = !this.show2;
  }
}