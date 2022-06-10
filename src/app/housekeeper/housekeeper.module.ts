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
import { VideoFileComponent } from './components/video-file/video-file.component';
import { CameraFilesComponent } from './components/camera-files/camera-files.component';
import { HousekeeperReportsComponent } from './components/housekeeper-reports/housekeeper-reports.component';
import { HousekeeperInventoryComponent } from './components/housekeeper-inventory/housekeeper-inventory.component';
import { HousekeeperInventoryCardComponent } from './components/housekeeper-inventory-card/housekeeper-inventory-card.component';
import { HousekeeperPosteriorReportComponent } from './components/housekeeper-posterior-report/housekeeper-posterior-report.component';

@NgModule({
  declarations: [
    HousekeeperComponent,
    HousekeeperModulesComponent,
    HousekeeperMenuComponent,
    HousekeeperActivitiesComponent,
    HousekeeperPreviousReportComponent,
    VideoFileComponent,
    CameraFilesComponent,
    HousekeeperReportsComponent,
    HousekeeperInventoryComponent,
    HousekeeperInventoryCardComponent,
    HousekeeperPosteriorReportComponent
  ],
  imports: [
    CommonModule,
    HousekeeperRoutingModule,
    SharedModule,
    ReactiveFormsModule

  ]
})
export class HousekeeperModule { }
