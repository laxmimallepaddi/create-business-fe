import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BusinessType } from '../business';

@Component({
  selector: 'app-find-business',
  templateUrl: './find-business.component.html',
  styleUrls: ['./find-business.component.css']
})
export class FindBusinessComponent implements OnInit {
  setKeywordValue='';
  constructor(private router: Router,private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    let param1 = this.activatedroute.snapshot.queryParams["keyword"];
    this.setKeywordValue=param1;
  }
  
  businesstypes=BusinessType;
  b_type_keys() : Array<string> {
    var keys = Object.keys(this.businesstypes);
    return keys;
  }
  b_type_values(): Array<string> {
    var values = Object.values(this.businesstypes);
    return values;
  }
}
