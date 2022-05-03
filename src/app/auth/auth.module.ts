import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { SuccessfulChangeComponent } from './components/successful-change/successful-change.component';
import { GetLinkComponent } from './components/get-link/get-link.component';
import { LinkSendingSuccessfulComponent } from './components/link-sending-successful/link-sending-successful.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SuccessfulChangeComponent,
    GetLinkComponent,
    LinkSendingSuccessfulComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
