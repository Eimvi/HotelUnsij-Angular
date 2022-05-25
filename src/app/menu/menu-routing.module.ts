import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChambermaidMenuComponent } from './components/chambermaid-menu/chambermaid-menu.component';
import { MenuComponent } from './menu.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MenuGuard } from '../core/guards/menu.guard';
import { MenuChildGuard } from '../core/guards/menu-child.guard';
import { VideoFileComponent } from './components/video-file/video-file.component';

const routes: Routes = [
  {
    path: '', component: MenuComponent, canActivate: [MenuGuard],
    children: [
      {
        path:'maid', component: ChambermaidMenuComponent, canActivateChild: [MenuChildGuard]
      },
      {
        path:'maid/reports/video', component: VideoFileComponent, canActivateChild: [MenuChildGuard]
      },
    ]
  },
  {
    path: 'my-profile', component: MyProfileComponent, canActivate: [MenuGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
