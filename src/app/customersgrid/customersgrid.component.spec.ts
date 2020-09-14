import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersgridComponent } from './customersgrid.component';

describe('CustomersgridComponent', () => {
  let component: CustomersgridComponent;
  let fixture: ComponentFixture<CustomersgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
