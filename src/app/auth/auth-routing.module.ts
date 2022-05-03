import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LinkSendingSuccessfulComponent } from './components/link-sending-successful/link-sending-successful.component';

const routes: Routes = [
  {
    path: 'link-successful/:email', component: LinkSendingSuccessfulComponent
  },
  {
    path: 'change-password', component: ChangePasswordComponent
  },
  {
    path: '', component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
