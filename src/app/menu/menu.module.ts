import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { ChambermaidMenuComponent } from './components/chambermaid-menu/chambermaid-menu.component';
import { ChambermaidActivitiesComponent } from './components/chambermaid-activities/chambermaid-activities.component';

@NgModule({
  declarations: [
    MenuComponent,
    ChambermaidMenuComponent,
    ChambermaidActivitiesComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
  ]
})
export class MenuModule { }