import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';

const routes: Routes = [
  {
    path: '', component: MenuComponent
  },
  {
    path: 'navbar', component: NavbarComponent
  },
  {
    path: 'my-profile', component: MyProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
