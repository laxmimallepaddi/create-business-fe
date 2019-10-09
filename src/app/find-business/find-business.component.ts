import { Component, OnInit ,ElementRef, NgZone, ɵConsole} from '@angular/core';
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
      console.log(response);
      this.business=response;
  }

  businesstypes=BusinessType;
  b_type_keys() : Array<string> {
    var keys = Object.keys(this.businesstypes);
    return keys;
  }
  b_type_values(): Array<string> {
    var values = Object.values(this.businesstypes);
    return values;
  }

  model = new BusinessFilter()
  filterBusiness(userdata){ 
    this.httpClientService.SearchFilter(userdata).subscribe(res => {
      console.log("search successful.")
      this.handleSuccessfulResponse(res);
    });
  }
  
  currentRate = 6;
  
}
