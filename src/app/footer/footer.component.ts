import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(
    private router: Router,
    public httpClientService: HttpClientService,) { }

  ngOnInit() {
  }
  public static businessTypeField = undefined;
  setFieldValue(businesstype: string){
    FooterComponent.businessTypeField=businesstype;
    this.router.navigate(['/findbusiness']);
    if (this.router.url === '/findbusiness'){
      this.redirectTo(this.router.url);}
  }
  redirectTo(uri) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    this.router.navigate([uri]));
  }

  msg1 = "";
  addFeedback(name:string, phno:string, message: string){
    let message1 = message + " From: " + phno +" ("+name+") ";
    document.getElementById("myModal1_close_btn").click();
    if(message !="" && phno !="" && name !=""){
      this.httpClientService.AddFeedback(message1)
      .subscribe( 
        data => { 
          if(data == "message sent successfully") 
            this.msg1 = "Thanks for your feedback. We would get back to you ASAP.";
        }, 
        error =>{ 
          if(error.status == 500)
            this.msg1 = "Unable to process your request. Please check your mobile number entered or internet connectivity.";
        })
    }
    else if(name =="")
      this.msg1 = "Please add name before submitting the form.";
    else if(phno =="")
      this.msg1 = "Please add phone number before submitting the form.";  
    else if(message =="")
      this.msg1 = "Please add message before submitting the form.";
    
    }
}
