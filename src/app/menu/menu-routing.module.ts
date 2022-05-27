import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChambermaidMenuComponent } from './components/chambermaid-menu/chambermaid-menu.component';
import { MenuComponent } from './menu.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MenuGuard } from '../core/guards/menu.guard';
import { MenuChildGuard } from '../core/guards/menu-child.guard';
import { VideoFileComponent } from './components/video-file/video-file.component';
import { PreviousReportComponent } from './components/previous-report/previous-report.component';
import { ReportsComponent } from './components/reports/reports.component';
import { CameraFilesComponent } from './components/camera-files/camera-files.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
  {
    path: '', component: MenuComponent, canActivate: [MenuGuard],
    children: [
      {
        path: 'menu', component: ChambermaidMenuComponent, canActivateChild: [MenuChildGuard]
      },
      {
        path: 'reports', component: ReportsComponent, canActivateChild: [MenuChildGuard],
      },
      {
        path: 'reports/previous-report', component: PreviousReportComponent, canActivateChild: [MenuChildGuard]
      },
      {
        path:'reports/video', component: VideoFileComponent, canActivateChild: [MenuChildGuard]
      },
      {
        path:'reports/camera', component: CameraFilesComponent, canActivateChild: [MenuChildGuard]
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
