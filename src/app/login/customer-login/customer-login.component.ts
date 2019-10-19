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
  
  loginCustomer(userdata){ 
    this.httpClientService.LoginCustomer(userdata)
    .pipe(first())
    .subscribe(
      res => {
        this.ngZone.run(() => this.router.navigateByUrl('/'))
      },
      error => {
        this.alertService.error('Username or password is incorrect.');
      }
      );
  }
  show1: boolean;
  showPassword1(pswd: string){
    this.show1 = !this.show1;
  }
}
