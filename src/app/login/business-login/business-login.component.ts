import { Component, OnInit ,ElementRef, NgZone} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BusinessLogin } from '../../business';
import { HttpClientService } from '../../service/http-client.service';
import { AlertService} from '../../service/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-business-login',
  templateUrl: './business-login.component.html',
  styleUrls: ['./business-login.component.css']
})
export class BusinessLoginComponent implements OnInit {
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
  model= new BusinessLogin(null,null);
  
  loginBusiness(userdata){ 
    this.httpClientService.LoginBusiness(userdata)
    .pipe(first())
    .subscribe(
      res => {
      this.ngZone.run(() => this.router.navigateByUrl('/business'))
    },
    error => {
      this.alertService.error('Username or password is incorrect.');
  });
  }
  show1: boolean;
  showPassword1(){
    this.show1 = !this.show1;
  }
}
