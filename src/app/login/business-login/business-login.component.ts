import { Component, OnInit ,ElementRef, NgZone} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BusinessLogin } from '../../business';
import { HttpClientService } from '../../service/http-client.service';

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
    private ngZone: NgZone
  ) { }

  ngOnInit() {
  }
  model= new BusinessLogin(null,null);
  
  loginBusiness(userdata){ 
    this.httpClientService.LoginBusiness(userdata).subscribe(res => {
      alert("Business Logged In successfully.")
      // localStorage.setItem('currentUser', JSON.stringify(userdata));
      // console.log(this.currentUser);
      this.ngZone.run(() => this.router.navigateByUrl('/business'))
    });
  }
}
