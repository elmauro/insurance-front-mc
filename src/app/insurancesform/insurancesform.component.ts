import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Insurance } from '../insurance';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-insurancesform',
  templateUrl: './insurancesform.component.html',
  styleUrls: ['./insurancesform.component.css']
})
export class InsurancesformComponent implements OnInit {

  @Input() Insurance: Insurance;
  @Output() outputSaveEvent:EventEmitter<boolean>=new EventEmitter();

  name: string;
  description: string;
  newDate: string;
  message: string;

  constructor(
    private insuranceService: InsuranceService
  ) { }

  ngOnInit(): void {
    this.newInsurance();
  }

  newInsurance() {
    this.message = "";
    this.name = "";
    this.description = "";
    this.newDate = "";

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

  saveInsurance() {
      if(this.Insurance.insuranceId != 0) {  
        this.Insurance.name = (this.Insurance.name != this.name && this.name != "") ? this.name : this.Insurance.name;
        this.Insurance.description = (this.Insurance.description != this.description && this.description != "") ? this.description : this.Insurance.description;
        this.insuranceService.updateInsurance(this.Insurance.insuranceId, this.Insurance)
        .then(insurance => {
          this.newInsurance();
          this.message = "Insurance Saved";
          this.outputSaveEvent.emit(true);
        });        
      }
      else {
        this.getDate();
        this.Insurance.name = (this.Insurance.name != this.name && this.name != "") ? this.name : this.Insurance.name;
        this.Insurance.description = (this.Insurance.description != this.description && this.description != "") ? this.description : this.Insurance.description;
        this.Insurance.start = this.newDate;

        this.insuranceService.saveInsurance(this.Insurance)
        .then(insurance => {
          this.newInsurance();
          this.message = "Insurance Saved";
          this.outputSaveEvent.emit(true);
        });        
      }
  }

  getDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    this.newDate = [month, day , year].join('/');
  }
}
