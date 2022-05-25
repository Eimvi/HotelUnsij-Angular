import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuRoutingModule } from '../menu/menu-routing.module';
import { PaginationComponent } from './components/pagination/pagination.component';
import { VideoCaptureComponent } from './components/video-capture/video-capture.component';


@NgModule({
  declarations: [
    NavbarComponent,
    PaginationComponent,
    VideoCaptureComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ],
  exports: [
    NavbarComponent,
    PaginationComponent,
    VideoCaptureComponent
  ]
})
export class SharedModule { }
