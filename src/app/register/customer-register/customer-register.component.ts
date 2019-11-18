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
  show1: boolean;
  show2:boolean;
  showPassword1(){
    this.show1 = !this.show1;
  }
  showPassword2(){
    this.show2 = !this.show2;
  }
  send_resend = "Send";
  v_step1_msg = "";
  v_step2_msg = "";
  sendVCode(ext: string,phone_no: string){
    ext = ext.slice(ext.indexOf(" ")+1,ext.length);
    let msg_var = "";
    this.httpClientService.SMSVerification(ext+phone_no)
    .subscribe( 
      data => { 
        setTimeout( () => {}, 10000 );
        this.v_step1_msg = data;
      }, 
      error =>{ 
        setTimeout( () => {}, 10000 );
         if(error.status == 500)
          this.v_step1_msg = "Unable to process your request. Please check your mobile number entered or internet connectivity.";
      })
      this.send_resend = "Resend";
  }
  verifyVCode(ext: string,phone_no: string,code: string){
    ext = ext.slice(ext.indexOf(" ")+1,ext.length);
    let data = {"phone_no":ext + phone_no + "","otp":code};
    this.httpClientService.GetVerificationCode(data).subscribe( 
      data => {
        setTimeout( () => {}, 10000 );
        this.v_step2_msg = data + " and click on sign-up button to complete your registration.";
      }, 
      error =>{ 
        setTimeout( () => {}, 10000 );
        if(error.status == 400)
          this.v_step2_msg = error.error;
        else
          this.v_step2_msg = "Unable to process your request. Please check your code entered or internet connectivity.";
        
      })
      console.log(this.v_step2_msg);
  }
}
