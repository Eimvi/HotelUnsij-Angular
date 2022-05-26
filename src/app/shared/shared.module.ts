import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuRoutingModule } from '../menu/menu-routing.module';
import { PaginationComponent } from './components/pagination/pagination.component';
import { VideoCaptureComponent } from './components/video-capture/video-capture.component';
import { SearchComponent } from './components/search/search.component';
import { HousekeeperRoutingModule } from '../housekeeper/housekeeper-routing.module';


@NgModule({
  declarations: [
    NavbarComponent,
    PaginationComponent,
    VideoCaptureComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MenuRoutingModule,
    HousekeeperRoutingModule
  ],
  exports: [
    NavbarComponent,
    PaginationComponent,
    VideoCaptureComponent,
    SearchComponent
  ]
})
export class SharedModule { }
