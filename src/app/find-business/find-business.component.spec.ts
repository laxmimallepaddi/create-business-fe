import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBusinessComponent } from './find-business.component';

describe('FindBusinessComponent', () => {
  let component: FindBusinessComponent;
  let fixture: ComponentFixture<FindBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
