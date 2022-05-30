import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HousekeeperComponent } from './housekeeper.component';
import { HousekeeperModulesComponent } from './components/housekeeper-modules/housekeeper-modules.component';
import { MenuGuard } from '../core/guards/menu.guard';
import { MenuChildGuard } from '../core/guards/menu-child.guard';
import { HousekeeperMenuComponent } from './components/housekeeper-menu/housekeeper-menu.component';

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
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousekeeperRoutingModule { }
