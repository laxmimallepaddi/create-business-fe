import { Component, OnInit ,ElementRef, NgZone,HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BusinessType,BusinessFilter } from '../business';
import { HttpClientService } from '../service/http-client.service';
import { Subscription } from 'rxjs';
import { Customer } from '../customer';
import { Business } from '../business';

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
    }
 
  ngOnInit() {
    this.httpClientService.getAllBusiness().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
    //  this.httpClientService.getRating().subscribe(
    //   response =>this.handleSuccessfulResponse(response),
    //  );
  }

  ngOnDestroy() {
    this.currentCustomerSubscription.unsubscribe();
    this.currentBusinessSubscription.unsubscribe();
  }  
  
  business: string[];
  handleSuccessfulResponse(response)
  {
      //console.log(response);
      this.business=response;
  }

  businesstypes=BusinessType;
  b_type_keys() : Array<string> {
    var keys = Object.keys(this.businesstypes);
    return keys.slice(keys.length / 2);
  }

  model = new BusinessFilter()
  filterBusiness(userdata){ 
    this.httpClientService.SearchFilter(userdata).subscribe(res => {
      //console.log("search successful.")
      this.handleSuccessfulResponse(res);
    });
  }
  
  screenWidth = 0;
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
  this.screenWidth = window.innerWidth;
  console.log(this.screenWidth);
  let result_count = document.getElementsByClassName('nav').length;
  var items:any;
  if(this.screenWidth <600){ 
    for(let i=0;i<result_count;i++){
        document.getElementsByClassName('nav')[i].classList.remove('flex-column');
        document.getElementsByClassName('icon')[i].setAttribute('hidden','hidden');
        document.getElementsByClassName('nav')[i].classList.add('nav-tabs');
        }
        items = document.getElementsByClassName('active');
        for (let i = 0; i < items.length; i++) {
            let element = items[i];
            element.style.background = 'white';
        }
      }    
  else{
    for(let i=0;i<result_count;i++){
      document.getElementsByClassName('nav')[i].classList.remove('nav-tabs');
      document.getElementsByClassName('icon')[i].removeAttribute('hidden');
      document.getElementsByClassName('nav')[i].classList.add('flex-column');
      }
      items = document.getElementsByClassName('active');
        for (let i = 0; i < items.length; i++) {
            let element = items[i];
            element.style.background = '#ebebeb';
        }
    }
   

}
  
}
