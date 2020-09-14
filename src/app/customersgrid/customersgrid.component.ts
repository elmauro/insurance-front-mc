import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Customer } from '../insurance';
import { CustomerInsuranceService } from '../customerinsuranceservice.service';

@Component({
  selector: 'app-customersgrid',
  templateUrl: './customersgrid.component.html',
  styleUrls: ['./customersgrid.component.css']
})
export class CustomersgridComponent implements OnInit {

  @Output() outputCustomerEvent:EventEmitter<Customer>=new EventEmitter();

  customers: Customer[];

  constructor(
    private customerinsuranceService: CustomerInsuranceService
  ) { }

  initialize() {
    this.getCustomers();
  }

  ngOnInit(): void {
    this.initialize();
  }

  onSelect(customer: Customer): void {
    this.outputCustomerEvent.emit(customer);
  }

  getCustomers() {
    this.customerinsuranceService.getCustomers()
    .then(customers => {
      this.customers = customers;
    });
  }

}
