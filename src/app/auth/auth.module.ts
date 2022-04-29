import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LinkSendingSuccessfulComponent } from './components/link-sending-successful/link-sending-successful.component';


@NgModule({
  declarations: [
    AuthComponent,
    LinkSendingSuccessfulComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
