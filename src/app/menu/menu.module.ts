import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { ChambermaidMenuComponent } from './components/chambermaid-menu/chambermaid-menu.component';
import { ChambermaidActivitiesComponent } from './components/chambermaid-activities/chambermaid-activities.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { VideoFileComponent } from './components/video-file/video-file.component';
import { PreviousReportComponent } from './components/previous-report/previous-report.component';
import { ReportsComponent } from './components/reports/reports.component';

@NgModule({
  declarations: [
    MenuComponent,
    ChambermaidMenuComponent,
    ChambermaidActivitiesComponent,
    MyProfileComponent,
    VideoFileComponent,
    PreviousReportComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MenuModule { }
