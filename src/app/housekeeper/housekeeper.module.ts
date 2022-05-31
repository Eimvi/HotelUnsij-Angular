import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HousekeeperRoutingModule } from './housekeeper-routing.module';
import { HousekeeperComponent } from './housekeeper.component';
import { HousekeeperModulesComponent } from './components/housekeeper-modules/housekeeper-modules.component';
import { SharedModule } from '../shared/shared.module';
import { HousekeeperReportsComponent } from './components/housekeeper-reports/housekeeper-reports.component';



@NgModule({
  declarations: [
    HousekeeperComponent,
    HousekeeperModulesComponent,
    HousekeeperReportsComponent
  ],
  imports: [
    CommonModule,
    HousekeeperRoutingModule,
    SharedModule
  ]
})
export class HousekeeperModule { }
