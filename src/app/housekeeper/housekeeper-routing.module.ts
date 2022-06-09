import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { MenuGuard } from '../core/guards/menu.guard';
import { MenuChildGuard } from '../core/guards/menu-child.guard';

import { HousekeeperComponent } from './housekeeper.component';
import { HousekeeperModulesComponent } from './components/housekeeper-modules/housekeeper-modules.component';
import { HousekeeperMenuComponent } from './components/housekeeper-menu/housekeeper-menu.component';
import { HousekeeperPreviousReportComponent } from './components/housekeeper-previous-report/housekeeper-previous-report.component';
import { VideoFileComponent } from './components/video-file/video-file.component';
import { CameraFilesComponent } from './components/camera-files/camera-files.component';
import { HousekeeperReportsComponent } from './components/housekeeper-reports/housekeeper-reports.component';
import { HousekeeperPosteriorReportComponent } from './components/housekeeper-posterior-report/housekeeper-posterior-report.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: '', component: HousekeeperComponent, canActivate: [MenuGuard],
    children: [
      {
          path: 'menu', component: HousekeeperModulesComponent, canActivateChild: [MenuChildGuard]
      },
      {
        path: 'activities', component: HousekeeperMenuComponent, canActivateChild: [MenuChildGuard]
      },
      {
        path: 'reports/previous-report', component: HousekeeperPreviousReportComponent, canActivateChild: [MenuChildGuard]
      },
      {
        path: 'reports/posterior-report', component: HousekeeperPosteriorReportComponent, canActivateChild: [MenuChildGuard]
      },
      {
        path:'reports/video', component: VideoFileComponent, canActivateChild: [MenuChildGuard]
      },
      {
        path:'reports/camera', component: CameraFilesComponent, canActivateChild: [MenuChildGuard]
      },
      {
        path: 'reports', component: HousekeeperReportsComponent, canActivateChild: [MenuChildGuard]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousekeeperRoutingModule { }
