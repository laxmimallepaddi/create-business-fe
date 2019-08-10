import { Component, OnInit ,ElementRef} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { $ } from 'protractor';


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
    this.phoneNumberCounter=this.phoneNumberCounter+1;
    var html_phone_number = '<div class="phone_number'+this.phoneNumberCounter+'" ><hr class="my-4"> <div class="row">'+
    '<div class=" col-sm-6 form-group">'+
    '<label>Phone Number</label>  '+
    '<input type="text" class="form-control" max="10" min="10" required>'+
    '</div>'+
    '<div class=" col-sm-5 form-group "> '+
    '<label>Phone Type</label>'+
    '<select type="text" class="form-control"  required>'+
    '<option value="HOME">HOME</option>'+
    '<option value="MOBILE">MOBILE</option>'+
    '<option value="OFFICE">OFFICE</option>'+
    '</select>'+
    '</div>'+
    '<div class=" col-sm-1 form-group "> '+
    '<button type="button" class="add-btn" (click)="removePhoneNumber()" style="margin-top: 35px;border-radius: 5rem;color: white;background-color: #67c2ec;box-shadow: 0em;">'+
    '<span class="fa fa-remove"></span>'+
    '</button> '+
    '</div>'+
    '</div></div>';
    this.elementRef.nativeElement.querySelector('.add_phone_number').insertAdjacentHTML('beforeend', html_phone_number);
    
  }
  removePhoneNumber(){
    console.log('Remove this element' +'.phone_number');
  }

  addAnotherAddress(){
    
    var html_address = '<hr class="my-4"><div class="row">'+
    '<div class=" col-sm-12 form-group">'+
    '<label>Address Line 1</label>  '+
    '<input type="text" class="form-control" required>'+
    '</div>'+
    '</div>  '+
    '<div class="row">'+
    '<div class=" col-sm-12 form-group">'+
    '<label>Address Line 2</label>'+
    '<input type="text" class="form-control" >'+
    '</div>'+
    '</div>'+
    '<div class="row">        '+
    '<div class=" col-sm-6 form-group ">'+
    '<label>Landmark</label>'+
    '<input type="text" class="form-control"  max="10" min="10" required>'+
    '</div>'+
    '<div class=" col-sm-6 form-group ">'+
    '<label>Zip Code</label>'+
    '<input type="text" class="form-control"  max="6" min="6" required>'+
    '</div>'+
    '</div>  '+
    '<div class="row">        '+
    '<div class=" col-sm-6 form-group ">'+
    '<label>State</label>'+
    '<select type="text" class="form-control"  required>'+
    '</select>'+
    '</div>'+
    '<div class=" col-sm-6 form-group ">'+
    '<label>City</label>'+
    '<select type="text" class="form-control"  required>'+
    '</select>'+
    '</div>'+
    '</div>';
    this.elementRef.nativeElement.querySelector('.add_address').insertAdjacentHTML('beforeend', html_address);

  }
}
