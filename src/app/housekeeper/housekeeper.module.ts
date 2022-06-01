import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HousekeeperRoutingModule } from './housekeeper-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HousekeeperComponent } from './housekeeper.component';
import { HousekeeperModulesComponent } from './components/housekeeper-modules/housekeeper-modules.component';
import { HousekeeperMenuComponent } from './components/housekeeper-menu/housekeeper-menu.component';
import { HousekeeperActivitiesComponent } from './components/housekeeper-activities/housekeeper-activities.component';
import { HousekeeperPreviousReportComponent } from './components/housekeeper-previous-report/housekeeper-previous-report.component';
import { VideoFileComponent } from './video-file/video-file.component';
import { CameraFilesComponent } from './camera-files/camera-files.component';
import { HousekeeperReportsComponent } from './components/housekeeper-reports/housekeeper-reports.component';


@NgModule({
  declarations: [
    HousekeeperComponent,
    HousekeeperModulesComponent,
    HousekeeperMenuComponent,
    HousekeeperActivitiesComponent,
    HousekeeperPreviousReportComponent,
    VideoFileComponent,
    CameraFilesComponent,
    HousekeeperReportsComponent
  ],
  imports: [
    CommonModule,
    HousekeeperRoutingModule,
    SharedModule,
    ReactiveFormsModule

  ]
})
export class HousekeeperModule { }
