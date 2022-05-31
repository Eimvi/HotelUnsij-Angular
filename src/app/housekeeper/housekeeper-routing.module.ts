import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HousekeeperComponent } from './housekeeper.component';
import { HousekeeperModulesComponent } from './components/housekeeper-modules/housekeeper-modules.component';
import { MenuGuard } from '../core/guards/menu.guard';
import { MenuChildGuard } from '../core/guards/menu-child.guard';
import { HousekeeperPreviousReportComponent } from './components/housekeeper-previous-report/housekeeper-previous-report.component';
import { VideoFileComponent } from './video-file/video-file.component';
import { CameraFilesComponent } from './camera-files/camera-files.component';


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
        path: 'reports/housekeeper-previous-report', component: HousekeeperPreviousReportComponent, canActivateChild: [MenuChildGuard]
      },
      {
        path:'reports/video', component: VideoFileComponent, canActivateChild: [MenuChildGuard]
      },
      {
        path:'reports/camera', component: CameraFilesComponent, canActivateChild: [MenuChildGuard]
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousekeeperRoutingModule { }
