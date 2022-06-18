import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendantComponent } from './attendant.component';

const routes: Routes = [{ path: '', component: AttendantComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendantRoutingModule { }
