import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChambermaidMenuComponent } from './components/chambermaid-menu/chambermaid-menu.component';
import { MenuComponent } from './menu.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MenuGuard } from '../core/guards/menu.guard';
import { MenuChildGuard } from '../core/guards/menu-child.guard';
import { PreviousReportComponent } from './components/previous-report/previous-report.component';
import { ReportsComponent } from './components/reports/reports.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'maid',
    pathMatch: 'full',
  },
  {
    path: '', component: MenuComponent, canActivate: [MenuGuard],
    children: [
      {
        path: 'maid', component: ChambermaidMenuComponent, canActivateChild: [MenuChildGuard]
      },
      {
        path: 'reports', component: ReportsComponent, canActivateChild: [MenuChildGuard],
      },
      {
        path: 'reports/previous-report', component: PreviousReportComponent, canActivateChild: [MenuChildGuard]
      },
      {
        path: 'my-profile', component: MyProfileComponent, canActivateChild: [MenuChildGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
