import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SuccessfulChangeComponent } from './components/successful-change/successful-change.component';
import { GetLinkComponent } from './components/get-link/get-link.component';
import { LinkSendingSuccessfulComponent } from './components/link-sending-successful/link-sending-successful.component';
import { RegisterComponent } from './components/register/register.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { RegisterSuccessfulComponent } from './components/register-successful/register-successful.component';
import { ActivatedAccountComponent } from './components/activated-account/activated-account.component';

@NgModule({
  declarations: [
    LoginComponent,
    SuccessfulChangeComponent,
    GetLinkComponent,
    ChangePasswordComponent,
    LinkSendingSuccessfulComponent,
    RegisterComponent,
    LinkSendingSuccessfulComponent,
    ChangePasswordComponent,
    RegisterSuccessfulComponent,
    ActivatedAccountComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
