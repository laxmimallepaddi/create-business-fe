import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private router: Router) { }

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
}
