import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'maid', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: 'housekeeper', loadChildren: () => import('./housekeeper/housekeeper.module').then(m => m.HousekeeperModule)
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  { path: 'attendant', loadChildren: () => import('./attendant/attendant.module').then(m => m.AttendantModule) },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
