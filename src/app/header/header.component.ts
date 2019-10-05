import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Customer } from '../customer';
import { Business } from '../business';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  currentCustomer: Customer;
  currentCustomerSubscription: Subscription;
  currentBusiness: Business;
  currentBusinessSubscription: Subscription;

 constructor(
   public router: Router,
   public activatedroute: ActivatedRoute,
   public httpClientService: HttpClientService,
   ) {
  this.currentCustomerSubscription = this.httpClientService.currentCustomer.subscribe(user => {
    this.currentCustomer = user;
  });
  this.currentBusinessSubscription = this.httpClientService.currentBusiness.subscribe(user => {
    this.currentBusiness = user;
  });
  }
  ngOnInit() {}
  onSearch(){    
    this.router.navigate(['/findbusiness']);
  }
  ngOnDestroy() {
    this.currentCustomerSubscription.unsubscribe();
    this.currentBusinessSubscription.unsubscribe();
  }  
  logout() {
    this.httpClientService.logout();
    this.router.navigate(['/']);
}
}