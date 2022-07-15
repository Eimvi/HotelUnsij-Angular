import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';
import { AttendantComponent } from './attendant.component';
import { DepositReportComponent } from './components/deposit-report/deposit-report.component';
import { VideoFileComponent } from '../attendant/components/video-file/video-file.component';
import { CameraFilesComponent } from '../attendant/components/camera-files/camera-files.component';
import { MenuGuard } from '../core/guards/menu.guard';
import { MenuChildGuard } from '../core/guards/menu-child.guard';

const routes: Routes = [
  {
    path: '', component: AttendantComponent, canActivate: [MenuGuard],
  children: [
      {
        path: 'depositReport', component: DepositReportComponent, canActivateChild:[MenuChildGuard]
      },
      {
        path: 'deposit/video', component: VideoFileComponent, canActivateChild:[MenuChildGuard]
      },
      {
        path: 'deposit/camera', component: CameraFilesComponent, canActivateChild:[MenuChildGuard]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendantRoutingModule { }
