import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HousekeeperComponent } from './housekeeper.component';
import { HousekeeperModulesComponent } from './components/housekeeper-modules/housekeeper-modules.component';
import { MenuGuard } from '../core/guards/menu.guard';
import { MenuChildGuard } from '../core/guards/menu-child.guard';

const routes: Routes = [
  {
    path: '', component: HousekeeperComponent, canActivate: [MenuGuard],
    children: [
      {
          path: 'modules', component: HousekeeperModulesComponent, canActivateChild: [MenuChildGuard]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousekeeperRoutingModule { }
