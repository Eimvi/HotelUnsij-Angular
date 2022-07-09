import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendantRoutingModule } from './attendant-routing.module';
import { AttendantComponent } from './attendant.component';
import { PettyCashComponent } from './components/petty-cash/petty-cash.component';
import { CashDepositComponent } from './components/cash-deposit/cash-deposit.component'
import { SharedModule } from '../shared/shared.module';
import { PettyCashCardComponent } from './components/petty-cash-card/petty-cash-card.component';
import { CashDepositCardComponent } from './components/cash-deposit-card/cash-deposit-card.component';


@NgModule({
  declarations: [
    AttendantComponent,
    PettyCashComponent,
    CashDepositComponent,
    PettyCashCardComponent,
    CashDepositCardComponent,
  ],
  imports: [
    CommonModule,
    AttendantRoutingModule,
    SharedModule
  ]
})
export class AttendantModule { }
