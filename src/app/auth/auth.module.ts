import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SuccessfulChangeComponent } from './components/successful-change/successful-change.component';


@NgModule({
  declarations: [
    AuthComponent,
    SuccessfulChangeComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
