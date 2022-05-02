import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { SuccessfulChangeComponent } from './components/successful-change/successful-change.component';
import { GetLinkComponent } from './components/get-link/get-link.component';

const routes: Routes = [
  {
    path: '', component: AuthComponent
  },
  {
    path: 'successful-change', component: SuccessfulChangeComponent
  },
  {
    path: 'get-link', component: GetLinkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
