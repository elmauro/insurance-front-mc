import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Insurance, Customer, CustomerInsurance, GridCustomerInsurance } from '../insurance';
import { InsuranceService } from '../insurance.service';
import { CustomerInsuranceService } from '../customerinsuranceservice.service';

@Component({
  selector: 'app-customersinsuranceform',
  templateUrl: './customersinsuranceform.component.html',
  styleUrls: ['./customersinsuranceform.component.css']
})
export class CustomersinsuranceformComponent implements OnInit {

  @Input() private updateCustomersInsuranceGrid: EventEmitter<Customer>;

  insurances: GridCustomerInsurance[];
  customerInsurances: CustomerInsurance[];
  customer: Customer;
  combined: GridCustomerInsurance[];

  constructor(
    private insuranceService: InsuranceService,
    private customerinsuranceService: CustomerInsuranceService
  ) { }

  initialize() {
    this.insurances = [];
    //this.getInsurances();

    if (this.updateCustomersInsuranceGrid) {
      this.updateCustomersInsuranceGrid.subscribe(data => {
        this.customer = data;
        this.getInsurances(this.customer);
      });
    }
  }

  ngOnInit(): void {
    this.initialize();
  }

  onSelect(insurance: Insurance): void {
  }

  onDelete(insurance: Insurance): void {
  }

  saveCustomerInsurance(insurance: GridCustomerInsurance) {
    this.customerinsuranceService.saveCustomerInsurance(this.customer, insurance)
    .then(customerinsurance => {
      this.getInsurances(this.customer);
    });
  }

  removeCustomerInsurance(insurance: GridCustomerInsurance) {
    this.customerinsuranceService.deleteCustomerInsurance(this.customer, insurance)
    .then(customerinsurance => {
      this.getInsurances(this.customer);
    });
  }

  getInsurances(customer: Customer) {
    this.insurances = [];
    this.insuranceService.getInsurances()
    .then(insurances => {

      this.combined = [];

      for(let i=0; i<insurances.length; i++) {
        let insurance = insurances[i];
        
        this.combined[insurances[i].insuranceId] = {
          'insuranceId': insurance.insuranceId,
          'name': insurance.name,
          'description': insurance.description,
          'type': insurance.type,
          'coverage': insurance.coverage,
          'start': insurance.start,
          'period': insurance.period,
          'price': insurance.price,
          'risk': insurance.risk,
          'show': false
        }
      }

      this.getCustomerInsurances(this.customer);
    });
  }

  getCustomerInsurances(customer: Customer) {
    this.customerinsuranceService.getCustomerInsurances(customer)
    .then(customerinsurances => {
      this.customerInsurances = customerinsurances;

      for(let i=0; i<customerinsurances.length; i++) {
        let insurance = customerinsurances[i]
        this.combined[customerinsurances[i].insuranceId] = {
          'insuranceId': insurance.insuranceId,
          'name': insurance.name,
          'description': insurance.description,
          'type': insurance.type,
          'coverage': insurance.coverage,
          'start': insurance.start,
          'period': insurance.period,
          'price': insurance.price,
          'risk': insurance.risk,
          'show': true
        }        
        //customerinsurances[i];
      }

      this.combined.forEach(element => {
          if(element.insuranceId) {
            this.insurances.push(element);
          }
      });

    });
  }

}
