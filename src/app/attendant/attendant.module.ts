import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendantRoutingModule } from './attendant-routing.module';
import { AttendantComponent } from './attendant.component';
import { DepositReportComponent } from './components/deposit-report/deposit-report.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { VideoFileComponent } from './components/video-file/video-file.component';
import { CameraFilesComponent } from './components/camera-files/camera-files.component';


@NgModule({
  declarations: [
    AttendantComponent,
    DepositReportComponent,
    VideoFileComponent,
    CameraFilesComponent
  ],
  imports: [
    CommonModule,
    AttendantRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AttendantModule { }
