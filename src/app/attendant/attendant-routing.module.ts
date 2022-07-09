import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuChildGuard } from '../core/guards/menu-child.guard';
import { MenuGuard } from '../core/guards/menu.guard';
import { AttendantComponent } from './attendant.component';
import { CashDepositComponent } from './components/cash-deposit/cash-deposit.component';
import { PettyCashComponent } from './components/petty-cash/petty-cash.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'petty-cash',
    pathMatch: 'full'
  },
  {
    path: '', component: AttendantComponent, canActivate: [MenuGuard],
    children: [
      {
        path: 'petty-cash', component: PettyCashComponent, canActivateChild: [MenuChildGuard]
      },
      {
        path: 'cash-deposit', component: CashDepositComponent, canActivateChild: [MenuChildGuard]
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendantRoutingModule { }
