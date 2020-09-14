import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Insurance } from '../insurance';

@Component({
  selector: 'app-insurances',
  templateUrl: './insurances.component.html',
  styleUrls: ['./insurances.component.css']
})
export class InsurancesComponent implements OnInit {
  updateGrid: EventEmitter<boolean> = new EventEmitter();

  Insurance: Insurance;
  
  constructor() { }

  initialize() {
    this.Insurance = {
      'insuranceId': 0,
      'name': '',
      'description': '',
      'type': 1,
      'coverage': '',
      'start': '',
      'period': 0,
      'price': 0,
      'risk': 1
    };
  }

  ngOnInit(): void {
    this.initialize();
  }

  selectedInsuranceEvent(insurance: Insurance) {
    this.Insurance = insurance;
  }

  saveEvent(hasSaved: boolean) {
    this.updateGrid.emit(true);
  }
}
