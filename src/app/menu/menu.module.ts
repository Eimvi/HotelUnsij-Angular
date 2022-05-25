import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { ChambermaidMenuComponent } from './components/chambermaid-menu/chambermaid-menu.component';
import { ChambermaidActivitiesComponent } from './components/chambermaid-activities/chambermaid-activities.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { VideoCaptureComponent } from './components/video-capture/video-capture.component';
import { VideoFileComponent } from './components/video-file/video-file.component';

@NgModule({
  declarations: [
    MenuComponent,
    ChambermaidMenuComponent,
    ChambermaidActivitiesComponent,
    MyProfileComponent,
    VideoCaptureComponent,
    VideoFileComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule
  ]
})
export class MenuModule { }