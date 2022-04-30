import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { GetLinkComponent } from './components/get-link/get-link.component';
import { LinkSendingSuccessfulComponent } from './components/link-sending-successful/link-sending-successful.component';

const routes: Routes = [
  {
    path: 'link-successful/:email', component: LinkSendingSuccessfulComponent
  },
  {
    path: 'get-link', component: GetLinkComponent
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
