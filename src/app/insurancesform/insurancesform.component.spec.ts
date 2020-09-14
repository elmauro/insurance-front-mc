import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancesformComponent } from './insurancesform.component';

describe('InsurancesformComponent', () => {
  let component: InsurancesformComponent;
  let fixture: ComponentFixture<InsurancesformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurancesformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
