import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterbusinessRegisterComponent } from './registerbusiness-register.component';

describe('RegisterbusinessRegisterComponent', () => {
  let component: RegisterbusinessRegisterComponent;
  let fixture: ComponentFixture<RegisterbusinessRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterbusinessRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterbusinessRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
