import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercustomerRegisterComponent } from './registercustomer-register.component';

describe('RegistercustomerRegisterComponent', () => {
  let component: RegistercustomerRegisterComponent;
  let fixture: ComponentFixture<RegistercustomerRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistercustomerRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistercustomerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
