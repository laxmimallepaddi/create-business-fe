import { Component, OnInit ,ElementRef, NgZone} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerLogin } from '../../customer';
import { HttpClientService } from '../../service/http-client.service';
import { AlertService} from '../../service/alert.service';
import { first } from 'rxjs/operators';

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
    private ngZone: NgZone,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }
  model= new CustomerLogin(null,null);
  unp_exists = false;
  error_msg = '';
  loginCustomer(userdata){ 
    this.httpClientService.LoginCustomer(userdata)
    .pipe(first())
    .subscribe(
      res => {
        this.unp_exists = false;
        this.ngZone.run(() => this.router.navigateByUrl('/findbusiness'))
      },
      error => {
        this.unp_exists = true;
        if(error.error.message == "Invalid UserName / Password ")
          this.error_msg = "Invalid UserName / Password.";
        else 
          this.error_msg = "Unable to process your request. Please check internet connection."  
      }
      );
  }
  show1: boolean;
  showPassword1(){
    this.show1 = !this.show1;
  }
}
