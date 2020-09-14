import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsurancesComponent }   from './insurances/insurances.component';
import { CustomersinsurancesComponent }   from './customersinsurances/customersinsurances.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/insurances', pathMatch: 'full' },
  { path: 'insurances', component: InsurancesComponent },
  { path: 'customersinsurances', component: CustomersinsurancesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
