import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LoginComponent } from './components/login/login.component';
import { SuccessfulChangeComponent } from './components/successful-change/successful-change.component';
import { GetLinkComponent } from './components/get-link/get-link.component';
import { LinkSendingSuccessfulComponent } from './components/link-sending-successful/link-sending-successful.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterSuccessfulComponent } from './components/register-successful/register-successful.component';
import { ActivatedAccountComponent } from './components/activated-account/activated-account.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'successful-change', component: SuccessfulChangeComponent
  },
  {
    path: 'link-successful/:email', component: LinkSendingSuccessfulComponent
  },
  {
    path: 'reset-password', component: ChangePasswordComponent
  },
  {
    path: 'get-link', component: GetLinkComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'register-successful', component: RegisterSuccessfulComponent
  },
  {
    path: 'activate-account', component: ActivatedAccountComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
