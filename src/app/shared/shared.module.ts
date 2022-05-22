import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuRoutingModule } from '../menu/menu-routing.module';
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule({
  declarations: [
    NavbarComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ],
  exports: [
    NavbarComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
