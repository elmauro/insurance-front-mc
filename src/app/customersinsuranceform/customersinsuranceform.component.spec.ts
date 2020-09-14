import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersinsuranceformComponent } from './customersinsuranceform.component';

describe('CustomersinsuranceformComponent', () => {
  let component: CustomersinsuranceformComponent;
  let fixture: ComponentFixture<CustomersinsuranceformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersinsuranceformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersinsuranceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
