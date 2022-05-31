import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HousekeeperRoutingModule } from './housekeeper-routing.module';
import { HousekeeperComponent } from './housekeeper.component';
import { HousekeeperModulesComponent } from './components/housekeeper-modules/housekeeper-modules.component';
import { SharedModule } from '../shared/shared.module';
import { HousekeeperPreviousReportComponent } from './components/housekeeper-previous-report/housekeeper-previous-report.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VideoFileComponent } from './video-file/video-file.component';
import { CameraFilesComponent } from './camera-files/camera-files.component';



@NgModule({
  declarations: [
    HousekeeperComponent,
    HousekeeperModulesComponent,
    HousekeeperPreviousReportComponent,
    VideoFileComponent,
    CameraFilesComponent,
  ],
  imports: [
    CommonModule,
    HousekeeperRoutingModule,
    SharedModule,
    ReactiveFormsModule

  ]
})
export class HousekeeperModule { }
