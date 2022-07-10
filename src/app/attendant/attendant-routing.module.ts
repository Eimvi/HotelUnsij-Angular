import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendantComponent } from './attendant.component';
import { MenuGuard } from '../core/guards/menu.guard';
import { AttendantModulesComponent } from './components/attendant-modules/attendant-modules.component';
import { MenuChildGuard } from '../core/guards/menu-child.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: '', component: AttendantComponent, canActivate:[MenuGuard],
    children:[
      {
        path: 'menu', component: AttendantModulesComponent, canActivateChild: [MenuChildGuard]
      }
    ]
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendantRoutingModule { }
