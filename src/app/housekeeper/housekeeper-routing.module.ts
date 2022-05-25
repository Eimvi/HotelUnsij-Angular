import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousekeeperComponent } from './housekeeper.component';

const routes: Routes = [
  {
    path: '', component: HousekeeperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousekeeperRoutingModule { }
