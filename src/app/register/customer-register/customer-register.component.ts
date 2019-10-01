import { Component, OnInit ,ElementRef, NgZone} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientService } from '../../service/http-client.service';
import { Customer } from '../../customer';

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
    private ngZone: NgZone
  ) { }

  ngOnInit() {
  }
  model = new Customer(null,null,null,null,null,null,null,null);
  
  onSubmit() { this.submitted = true; }

  createCustomer(userdata){ 
    this.httpClientService.CreateCustomer(userdata).subscribe(res => {
      alert("Customer created successfully.")
      this.ngZone.run(() => this.router.navigateByUrl('/'))
    });
  }
}
