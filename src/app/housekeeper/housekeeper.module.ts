import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HousekeeperRoutingModule } from './housekeeper-routing.module';
import { HousekeeperComponent } from './housekeeper.component';
import { HousekeeperModulesComponent } from './components/housekeeper-modules/housekeeper-modules.component';
import { SharedModule } from '../shared/shared.module';
import { HousekeeperMenuComponent } from './components/housekeeper-menu/housekeeper-menu.component';
import { HousekeeperActivitiesComponent } from './components/housekeeper-activities/housekeeper-activities.component';



@NgModule({
  declarations: [
    HousekeeperComponent,
    HousekeeperModulesComponent,
    HousekeeperMenuComponent,
    HousekeeperActivitiesComponent
  ],
  imports: [
    CommonModule,
    HousekeeperRoutingModule,
    SharedModule
  ]
})
export class HousekeeperModule { }
