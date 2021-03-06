import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {WebcamModule} from 'ngx-webcam';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { VideoCaptureComponent } from './components/video-capture/video-capture.component';
import { SearchComponent } from './components/search/search.component';
import { CameraCaptureComponent } from './components/camera-capture/camera-capture.component';
import { TypeReportPipe } from './pipes/type-report.pipe';


@NgModule({
  declarations: [
    NavbarComponent,
    PaginationComponent,
    VideoCaptureComponent,
    SearchComponent,
    CameraCaptureComponent,
    TypeReportPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    WebcamModule
  ],
  exports: [
    NavbarComponent,
    PaginationComponent,
    VideoCaptureComponent,
    SearchComponent,
    CameraCaptureComponent,
    TypeReportPipe
  ]
})
export class SharedModule { }
