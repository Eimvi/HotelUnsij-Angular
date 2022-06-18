import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendantRoutingModule } from './attendant-routing.module';
import { AttendantComponent } from './attendant.component';


@NgModule({
  declarations: [
    AttendantComponent
  ],
  imports: [
    CommonModule,
    AttendantRoutingModule
  ]
})
export class AttendantModule { }
