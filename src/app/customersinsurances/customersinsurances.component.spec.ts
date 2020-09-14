import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersinsurancesComponent } from './customersinsurances.component';

describe('CustomersinsurancesComponent', () => {
  let component: CustomersinsurancesComponent;
  let fixture: ComponentFixture<CustomersinsurancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersinsurancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersinsurancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
