import { Component, OnInit ,ElementRef} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


export enum BusinessType{
        STORAGESPACEPROVIDERS= "Storage Space Providers",
        PANDITHSERVICES = "Pandith Services",
        FASHIONDESIGNERSERVICES = "Fashion Designers Services",
        FLEXIPRINTINGSERVICES = "Flex Printing Services",
        GIFTSSHOP="Gifts Shop",
        MATRIMONIALSERVICES="Matrimonial Services",
        EVENTORGANIZERS="Event Organizers",
        JEWELRYSTORES="Jewelery Stores",
        BRIDALBEAUTYPRODUCTS = "Bridal Beauty Products",
        ACOUSTICSINGERSBANDS="Acoustic Singer Bands",
        BRIDALHAIRCARE="Bridal Haircare",
        BRIDALSKINCARE="Bridal Skincare",
        CAKESBAKES="Cakes n Bakes",
        CATERING="Cartering",
        GENERALCLEANINGSERVICES="General Cleaining Services",
        CORPORATEEVENTVENUE="Corporate Event Venue",
        DJSENTERTAINMENTAGENCY="DJ Entertainment Agency",
        EVENTPHOTOGRAPHY="Event Photography",
        EVENTSECURITY="Event Security",
        FOODTRUCK="Food Truck",
        GRAPHICDESIGNER="Graphic Designer",
        FIREWORKS="Fireworks",
        INVITATIONCARDPRINT="Invitation Card Printing",
        KIDSPARTYHOST="Kids party Host",
        MAGICIANS="Magicians",
        MOBILEBAR="Mobile Bar",
        PARTYEVENTCLEANING="Party Event Cleaning",
        PETSITTING="Pet Sitting",
        WEDDINGPHOTOGRAPHY="Wedding Photography",
        WEDDINGTRANSPORTATION="Wedding Transportation",
        WEDDINGVENUES="Wedding Venues",
        WEDDINGSEVENTFLORISTS="Wedding Event Florists"
}

@Component({
  selector: 'app-business-register',
  templateUrl: './business-register.component.html',
  styleUrls: ['./business-register.component.css']
})
export class BusinessRegisterComponent implements OnInit {
  htmlToAddPhoneNumber='';
  businesstypes=BusinessType;
  phoneNumberCounter=1;
  addressCounter=1;
  replicateAddressCheckbox=true;
  phoneNumber1=false;
  phoneNumber2=false;
  officeAddress1=false;
  sameAddress=false;
  copyaddressline1='';
  copyaddressline2='';
  copylandmark='';
  copypincode='';
  copycountry='';
  copystate='';
  copycity='';
  
  b_type_keys() : Array<string> {
    var keys = Object.keys(this.businesstypes);
    return keys;
  }
  b_type_values(): Array<string> {
    var values = Object.values(this.businesstypes);
    return values;
  }

  constructor(private router: Router,private activatedroute: ActivatedRoute,private elementRef:ElementRef) { }

  ngOnInit() {
  }

  addAnotherPhoneNumber(){
    if(this.phoneNumberCounter==1 || this.phoneNumberCounter==3){
      this.phoneNumberCounter+=1;
      this.phoneNumber1=true;
    }
    else if(this.phoneNumberCounter==2){
      this.phoneNumberCounter+=2;
      this.phoneNumber2=true;
    }
  }
  removePhoneNumber1(){
    this.phoneNumberCounter-=1;
    this.phoneNumber1=false;
  }
  removePhoneNumber2(){
    this.phoneNumberCounter-=2;
    this.phoneNumber2=false;
  }

  addAnotherAddress(){
    if(this.addressCounter==1){
      this.addressCounter+=1;
      this.replicateAddressCheckbox=false;  
      this.officeAddress1=true;
    }
  }
  removeAddress(){
    this.replicateAddressCheckbox=true;
    this.addressCounter -= 1;
    this.officeAddress1 = false;
  }
  onChangeCheckbox(event,addressline1:string,addressline2:string,landmark:string,pincode:string,country:string,state:string,city:string){
    if(event.target.checked){
      this.sameAddress=true;
      this.copyaddressline1=addressline1;
      this.copyaddressline2=addressline2;
      this.copylandmark=landmark;
      this.copycountry=country;
      this.copystate=state;
      this.copycity=city;
      this.copypincode=pincode;
    }
    else{
      this.sameAddress=false;
      this.copyaddressline1='';
      this.copyaddressline2='';
      this.copylandmark='';
      this.copycountry='';
      this.copystate='';
      this.copycity='';
      this.copypincode='';
    }
  }
}
