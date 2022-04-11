import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Insurance } from './insurance';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  private url = 'https://www.ifmnetback.com/';
  private insurancePath = 'countries';
  private headers = new Headers(
    {
      'Content-Type': 'application/json',
      'ApiKey': 'hl4bA4nb4yI0vI0fC8fH7eT6'
    });

  constructor(private http: Http) {
  }

  saveInsurance(insurance: Insurance): Promise<Insurance> {
    return this.http
        .post(this.url + this.insurancePath, JSON.stringify(insurance), {headers: this.headers})
        .toPromise()
        .then(() => insurance);
  }

  getInsurance(insuranceId: number): Promise<Insurance> {
    return this.http
          .get(this.url + this.insurancePath + "/" + insuranceId)
          .toPromise()
          .then(res => res.json() as Insurance);
  }

  getInsurances(): Promise<Insurance[]> {
    return this.http
          .get(this.url + this.insurancePath, {headers: this.headers})
          .toPromise()
          .then(res => res.json() as Insurance[]); 
  }

  updateInsurance(insuranceId: number, insurance: Insurance): Promise<Insurance> {
    return this.http
        .put(this.url + this.insurancePath + "/" + insuranceId, JSON.stringify(insurance), {headers: this.headers})
        .toPromise()
        .then(res => res.json() as Insurance);
  }

  deleteInsurance(insuranceId: number): Promise<Insurance> {
    return this.http
        .delete(this.url + this.insurancePath + "/" + insuranceId)
        .toPromise()
        .then(res => res.json() as Insurance);
  }
}
