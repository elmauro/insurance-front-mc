import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancesgridComponent } from './insurancesgrid.component';

describe('InsurancesgridComponent', () => {
  let component: InsurancesgridComponent;
  let fixture: ComponentFixture<InsurancesgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurancesgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancesgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
