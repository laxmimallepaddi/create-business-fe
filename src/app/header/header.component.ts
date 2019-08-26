import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  setKeywordValue='';
  constructor(public router: Router,public activatedroute: ActivatedRoute) { }
  ngOnInit() {}
  onSearch(searchValue: string){    
    this.router.navigate(['/findbusiness'], { queryParams: { keyword: searchValue } });
    this.setKeywordValue=searchValue;
  }
}