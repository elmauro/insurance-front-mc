import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InsurancesComponent } from './insurances/insurances.component';
import { InsurancesformComponent } from './insurancesform/insurancesform.component';
import { InsurancesgridComponent } from './insurancesgrid/insurancesgrid.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomersinsurancesComponent } from './customersinsurances/customersinsurances.component';
import { CustomersgridComponent } from './customersgrid/customersgrid.component';
import { CustomersinsuranceformComponent } from './customersinsuranceform/customersinsuranceform.component';

@NgModule({
  declarations: [
    AppComponent,
    InsurancesComponent,
    InsurancesformComponent,
    InsurancesgridComponent,
    CustomersinsurancesComponent,
    CustomersgridComponent,
    CustomersinsuranceformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
