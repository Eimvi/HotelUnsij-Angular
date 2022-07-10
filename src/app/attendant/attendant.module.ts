import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendantRoutingModule } from './attendant-routing.module';
import { AttendantComponent } from './attendant.component';
import { AttendantModulesComponent } from './components/attendant-modules/attendant-modules.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AttendantComponent,
    AttendantModulesComponent
  ],
  imports: [
    CommonModule,
    AttendantRoutingModule,
    SharedModule
  ]
})
export class AttendantModule { }
