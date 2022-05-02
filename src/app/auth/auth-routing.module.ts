import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { GetLinkComponent } from './components/get-link/get-link.component';

const routes: Routes = [
  {
    path: '', component: AuthComponent
  },
  {
    path: 'login', component: LoginComponent
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
