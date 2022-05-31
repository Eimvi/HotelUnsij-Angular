import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HousekeeperComponent } from './housekeeper.component';
import { HousekeeperModulesComponent } from './components/housekeeper-modules/housekeeper-modules.component';
import { MenuGuard } from '../core/guards/menu.guard';
import { MenuChildGuard } from '../core/guards/menu-child.guard';
import { HousekeeperReportsComponent } from './components/housekeeper-reports/housekeeper-reports.component';

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
