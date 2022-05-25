import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { ChambermaidMenuComponent } from './components/chambermaid-menu/chambermaid-menu.component';
import { ChambermaidActivitiesComponent } from './components/chambermaid-activities/chambermaid-activities.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ReportsComponent } from './components/reports/reports.component';

@NgModule({
  declarations: [
    MenuComponent,
    ChambermaidMenuComponent,
    ChambermaidActivitiesComponent,
    MyProfileComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule
  ]
})
export class MenuModule { }