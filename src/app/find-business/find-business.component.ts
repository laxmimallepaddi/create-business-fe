import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  
}
