import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 constructor(public router: Router,public activatedroute: ActivatedRoute) { }
  ngOnInit() {}
  onSearch(){    
    this.router.navigate(['/findbusiness']);
  }
}