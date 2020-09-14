import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Insurance } from '../insurance';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-insurancesgrid',
  templateUrl: './insurancesgrid.component.html',
  styleUrls: ['./insurancesgrid.component.css']
})
export class InsurancesgridComponent implements OnInit {

  @Input() private updateGrid: EventEmitter<boolean>;
  @Output() outputInsuranceEvent:EventEmitter<Insurance>=new EventEmitter();

  insurances: Insurance[];

  constructor(
    private insuranceService: InsuranceService
  ) { }

  initialize() {
    this.getInsurances();

    if (this.updateGrid) {
      this.updateGrid.subscribe(data => {
        this.getInsurances();
        //alert("Updating Grid")
      });
    }
  }

  ngOnInit(): void {
    this.initialize();
  }

  onSelect(insurance: Insurance): void {
    this.outputInsuranceEvent.emit(insurance);
  }

  onDelete(insurance: Insurance): void {
    this.deleteInsurance(insurance.insuranceId);
  }

  getInsurances() {
    this.insuranceService.getInsurances()
    .then(insurances => {
      this.insurances = insurances;
    });
  }

  deleteInsurance(insuranceId: number){
    this.insuranceService.deleteInsurance(insuranceId)
    .then(insurances => {
      this.getInsurances();
    });
  }
}
