import { Component, OnInit ,ElementRef, NgZone} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientService } from '../../service/http-client.service';
import { Customer } from '../../customer';
import { AlertService} from '../../service/alert.service';

@Component({
  selector: 'app-registercustomer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {
  submitted = false;
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
  model = new Customer(null,null,null,null,null,null,null,null);
  
  onSubmit() { this.submitted = true; }

  createCustomer(userdata){ 
    this.httpClientService.CreateCustomer(userdata)
    .subscribe(res => {
      this.alertService.success('You are registered successfully.', true);
      this.ngZone.run(() => this.router.navigateByUrl('/login/customer'))
    },
      error => {
        this.alertService.error('Username already exists.');
    }
    );
  }
}
