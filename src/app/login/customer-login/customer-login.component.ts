import { Component, OnInit ,ElementRef, NgZone} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerLogin } from '../../customer';
import { HttpClientService } from '../../service/http-client.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor(
    public router: Router,
    public activatedroute: ActivatedRoute,
    public elementRef:ElementRef,
    public httpClientService: HttpClientService,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
  }
  model= new CustomerLogin(null,null);
  
  loginCustomer(userdata){ 
    this.httpClientService.LoginCustomer(userdata).subscribe(res => {
      alert("Customer Logged In successfully.")
      // localStorage.setItem('currentUser', JSON.stringify(userdata));
      // console.log('currentUser')
      this.ngZone.run(() => this.router.navigateByUrl('/'))
    });
  }
}
