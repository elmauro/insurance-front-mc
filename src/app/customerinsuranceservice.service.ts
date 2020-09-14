import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Customer, CustomerInsurance, GridCustomerInsurance } from './insurance';

@Injectable({
  providedIn: 'root'
})
export class CustomerInsuranceService {

  private url = 'http://mcinsurancebackapi-env.eba-tvwzp2rf.us-east-1.elasticbeanstalk.com/';
  private insurancePath = 'customers';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getCustomers(): Promise<Customer[]> {
    return this.http
          .get(this.url + this.insurancePath)
          .toPromise()
          .then(res => res.json() as Customer[]); 
  }

  getCustomerInsurances(customer: Customer): Promise<CustomerInsurance[]> {
    return this.http
          .get(this.url + this.insurancePath + "/" + customer.document + "/insurances")
          .toPromise()
          .then(res => res.json() as CustomerInsurance[]); 
  }

  saveCustomerInsurance(customer: Customer, customerinsurance: GridCustomerInsurance): Promise<GridCustomerInsurance> {
    return this.http
        .post(this.url + this.insurancePath + "/" + customer.document + "/insurances", JSON.stringify(customerinsurance), {headers: this.headers})
        .toPromise()
        .then(() => customerinsurance);
  }

  deleteCustomerInsurance(customer: Customer, customerinsurance: GridCustomerInsurance): Promise<GridCustomerInsurance> {
    return this.http
    .delete(this.url + this.insurancePath + "/" + customer.document + "/insurances/" + customerinsurance.insuranceId)
    .toPromise()
    .then(res => res.json() as GridCustomerInsurance);
  }
}
