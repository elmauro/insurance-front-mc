import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Insurance, Customer } from '../insurance';

@Component({
  selector: 'app-customersinsurances',
  templateUrl: './customersinsurances.component.html',
  styleUrls: ['./customersinsurances.component.css']
})
export class CustomersinsurancesComponent implements OnInit {

  updateCustomersInsuranceGrid: EventEmitter<Customer> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectEvent(customer: Customer) {
    this.updateCustomersInsuranceGrid.emit(customer);
  }

}
