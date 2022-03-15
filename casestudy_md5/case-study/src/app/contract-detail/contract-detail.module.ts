import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractDetailRoutingModule } from './contract-detail-routing.module';
import { ContractDetailListComponent } from './contract-detail-list/contract-detail-list.component';
import { ContractDetailCreateComponent } from './contract-detail-create/contract-detail-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";


@NgModule({
  declarations: [ContractDetailListComponent, ContractDetailCreateComponent],
  imports: [
    CommonModule,
    ContractDetailRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class ContractDetailModule { }
