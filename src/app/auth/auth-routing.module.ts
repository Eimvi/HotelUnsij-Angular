import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SuccessfulChangeComponent } from './components/successful-change/successful-change.component';

const routes: Routes = [
  {
    path: '', component: AuthComponent
  },
  {
    path: 'successful-change', component: SuccessfulChangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
