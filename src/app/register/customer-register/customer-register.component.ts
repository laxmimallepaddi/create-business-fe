import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';

@Component({
  selector: 'app-registercustomer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {
  submitted = false;
  constructor() { }

  ngOnInit() {
  }
  model = new Customer(null,null,null,null,null,null);
  
  onSubmit() { this.submitted = true; }
}
