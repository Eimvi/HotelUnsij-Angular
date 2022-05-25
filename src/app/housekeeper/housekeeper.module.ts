import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousekeeperRoutingModule } from './housekeeper-routing.module';
import { HousekeeperComponent } from './housekeeper.component';


@NgModule({
  declarations: [
    HousekeeperComponent
  ],
  imports: [
    CommonModule,
    HousekeeperRoutingModule
  ]
})
export class HousekeeperModule { }
