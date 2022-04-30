import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { GetLinkComponent } from './components/get-link/get-link.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LinkSendingSuccessfulComponent } from './components/link-sending-successful/link-sending-successful.component';


@NgModule({
  declarations: [
    AuthComponent,
    GetLinkComponent
    LinkSendingSuccessfulComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
