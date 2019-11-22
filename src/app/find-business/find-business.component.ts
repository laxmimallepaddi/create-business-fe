import { Component, OnInit ,ElementRef, NgZone,HostListener, ViewChild,AfterContentInit,AfterViewInit,OnChanges} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BusinessType,BusinessFilter } from '../business';
import { HttpClientService } from '../service/http-client.service';
import { Subscription } from 'rxjs';
import { Customer } from '../customer';
import { Business } from '../business';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-find-business',
  templateUrl: './find-business.component.html',
  styleUrls: ['./find-business.component.css']
})
export class FindBusinessComponent implements OnInit {
  
  currentCustomer: Customer;
  currentCustomerSubscription: Subscription;
  currentBusiness: Business;
  currentBusinessSubscription: Subscription;
  
  constructor(
    public router: Router,
    public activatedroute: ActivatedRoute,
    public elementRef:ElementRef,
    public httpClientService: HttpClientService,
    private ngZone: NgZone
    ) { 

      this.currentCustomerSubscription = this.httpClientService.currentCustomer.subscribe(user => {
        this.currentCustomer = user;
      });
      this.currentBusinessSubscription = this.httpClientService.currentBusiness.subscribe(user => {
        this.currentBusiness = user;
      });
      this.onResize();
      this.model.businessType = FooterComponent.businessTypeField;
    }

  @ViewChild('filter_submit', {static: false}) filter_submit: ElementRef;
  ngOnInit() {
    this.httpClientService.getAllBusiness().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
    setTimeout(() => {
    this.filter_submit.nativeElement.click();
    }, 10);
  }

  ngOnDestroy() {
    this.currentCustomerSubscription.unsubscribe();
    this.currentBusinessSubscription.unsubscribe();
  }  
  
  business: string[];
  no_of_business = 0;
  handleSuccessfulResponse(response)
  {
      this.business=response;
      this.no_of_business = response.length;
  }

  businesstypes=BusinessType;
  b_type_keys() : Array<string> {
    var keys = Object.keys(this.businesstypes);
    return keys.slice(keys.length / 2);
  }
  model = new BusinessFilter(null,null);
  filterBusiness(userdata){ 
    this.httpClientService.SearchFilter(userdata).subscribe(res => {
      this.handleSuccessfulResponse(res);
    });
    
  }
  
  screenWidth = 0;
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
  this.screenWidth = window.innerWidth;
  let result_count = document.getElementsByClassName('nav').length;
  var items:any;
  if(this.screenWidth <600){ 
    for(let i=0;i<result_count;i++){
        document.getElementsByClassName('icon')[i].setAttribute('hidden','hidden');
        }
      }    
  else{
    for(let i=0;i<result_count;i++){
      document.getElementsByClassName('icon')[i].removeAttribute('hidden');
      }
    }
}

doUpperCase(){
  if(this.model.primaryCountry != null)
    this.model.primaryCountry = this.model.primaryCountry.toUpperCase();
  if(this.model.primaryState != null)
    this.model.primaryState = this.model.primaryState.toUpperCase();
  if(this.model.primaryCity != null)
    this.model.primaryCity = this.model.primaryCity.toUpperCase();
}

add_rating_success = {};
msg_index = {}
show = true;
rated = "0";
addRating(rate :string,businessid: string,index:number){
  let userdata = {"rate" : rate,"businessid":businessid};
  this.httpClientService.AddRating(userdata).subscribe(res => {
    this.addStars(res,index,'');
  });
  this.add_rating_success[index] = true;
  this.msg_index = index;
  this.rated = rate;
}

closeAlert(close_id: number) {
  document.getElementById('alert' +close_id).classList.remove('show');
}
  
addStars(ratingx: any,index_i:number,suffix:string){
    let rating;
    if(ratingx !=null) 
      rating = ratingx.averageRating +"";
    else 
      rating=0;    
    let i = index_i+"";
    document.getElementById("Star5"+suffix+i).classList.remove('fa-star-half-o');
    document.getElementById('Star4'+suffix+i).classList.remove('fa-star-half-o');
    document.getElementById('Star3'+suffix+i).classList.remove('fa-star-half-o');
    document.getElementById('Star2'+suffix+i).classList.remove('fa-star-half-o');
    document.getElementById('Star1'+suffix+i).classList.remove('fa-star-half-o');
    document.getElementById('Star5'+suffix+i).classList.remove('fa-star-o');
    document.getElementById('Star4'+suffix+i).classList.remove('fa-star-o');
    document.getElementById('Star3'+suffix+i).classList.remove('fa-star-o');
    document.getElementById('Star2'+suffix+i).classList.remove('fa-star-o');
    document.getElementById('Star1'+suffix+i).classList.remove('fa-star-o');
    document.getElementById('Star5'+suffix+i).classList.remove('fa-star');
    document.getElementById('Star4'+suffix+i).classList.remove('fa-star');
    document.getElementById('Star3'+suffix+i).classList.remove('fa-star');
    document.getElementById('Star2'+suffix+i).classList.remove('fa-star');
    document.getElementById('Star1'+suffix+i).classList.remove('fa-star');
    document.getElementById('Star5'+suffix+i).classList.add('fa-star');
    document.getElementById('Star4'+suffix+i).classList.add('fa-star');
    document.getElementById('Star3'+suffix+i).classList.add('fa-star');
    document.getElementById('Star2'+suffix+i).classList.add('fa-star');
    document.getElementById('Star1'+suffix+i).classList.add('fa-star');
      if(rating == 5.0) {
          document.getElementById('Star5'+suffix+i).classList.add('fa-star');
          document.getElementById('Star4'+suffix+i).classList.add('fa-star');
          document.getElementById('Star3'+suffix+i).classList.add('fa-star');
          document.getElementById('Star2'+suffix+i).classList.add('fa-star');
          document.getElementById('Star1'+suffix+i).classList.add('fa-star');
      }
      else if(rating<5.0 && rating>4.0) {
          document.getElementById('Star5'+suffix+i).classList.add('fa-star-half-o');
          document.getElementById('Star4'+suffix+i).classList.add('fa-star');
          document.getElementById('Star3'+suffix+i).classList.add('fa-star');
          document.getElementById('Star2'+suffix+i).classList.add('fa-star');
          document.getElementById('Star1'+suffix+i).classList.add('fa-star');
      }
      else if(rating==4.0) {
        document.getElementById('Star5'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star4'+suffix+i).classList.add('fa-star');
        document.getElementById('Star3'+suffix+i).classList.add('fa-star');
        document.getElementById('Star2'+suffix+i).classList.add('fa-star');
        document.getElementById('Star1'+suffix+i).classList.add('fa-star');
      }
      else if(rating<4.0 && rating>3.0) {
        document.getElementById('Star5'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star4'+suffix+i).classList.add('fa-star-half-o');
        document.getElementById('Star3'+suffix+i).classList.add('fa-star');
        document.getElementById('Star2'+suffix+i).classList.add('fa-star');
        document.getElementById('Star1'+suffix+i).classList.add('fa-star');
      }
      else if(rating==3.0) {
        document.getElementById('Star5'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star4'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star3'+suffix+i).classList.add('fa-star');
        document.getElementById('Star2'+suffix+i).classList.add('fa-star');
        document.getElementById('Star1'+suffix+i).classList.add('fa-star');
      }
      else if(rating<3.0 && rating>2.0) {
        document.getElementById('Star5'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star4'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star3'+suffix+i).classList.add('fa-star-half-o');
        document.getElementById('Star2'+suffix+i).classList.add('fa-star');
        document.getElementById('Star1'+suffix+i).classList.add('fa-star');
      }
      else if(rating==2.0) {
        document.getElementById('Star5'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star4'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star3'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star2'+suffix+i).classList.add('fa-star');
        document.getElementById('Star1'+suffix+i).classList.add('fa-star');
      }
      else if(rating<2.0 && rating>1.0) {
        document.getElementById('Star5'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star4'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star3'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star2'+suffix+i).classList.add('fa-star-half-o');
        document.getElementById('Star1'+suffix+i).classList.add('fa-star');
      }
      else if(rating==1.0) {
        document.getElementById('Star5'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star4'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star3'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star2'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star1'+suffix+i).classList.add('fa-star');
      }
      else if(rating<1.0 && rating>=0.5) {
        document.getElementById('Star5'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star4'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star3'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star2'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star1'+suffix+i).classList.add('fa-star-half-o');
      }
      else if(rating<=0.5 && rating>=0.0) {
        document.getElementById('Star5'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star4'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star3'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star2'+suffix+i).classList.add('fa-star-o');
        document.getElementById('Star1'+suffix+i).classList.add('fa-star-o');
      }
    }

  msgx = "";
  msg1 = "";
  msg2 = "";
  data = {};
  data1 = {};  
  doBooking(c_extno:number,c_phno: number, b_extno:number,b_phno: number){
    let message_c = "Thanks for using Book The Event. Business owner will contact you soon. Have a nice day.";
    let message_b = "Thanks for using Book The Event. Please reach out to the customer (+"+c_extno+c_phno+") for the lead. Have a nice day.";
    this.data = {"msg" : message_c, "phno": c_extno+c_phno+""};
    this.data1 = {"msg" : message_b, "phno": b_extno+b_phno+""};
  }  
  doBookingConfirmation(confirmation : boolean){
    if(confirmation){
      document.getElementById("myModalx_close_btn").click();
      this.httpClientService.SendBookingMessagesToBusiness(this.data1)
      .subscribe( 
        data => { 
          if(data == "message sent successfully") 
            this.msgx = "Notifications sent successfully.";
        },
        error =>{
          this.msgx = "Unable to process your request. Please check your mobile number entered or internet connectivity.";
        })
      this.httpClientService.SendBookingMessagesToCustomer(this.data)
      .subscribe( 
        data => { 
          if(data == "message sent successfully") 
            this.msgx = "Notifications sent successfully.";
        },
        error =>{
          this.msgx = "Unable to process your request. Please check your mobile number entered or internet connectivity.";
        })
    }
  }
}
