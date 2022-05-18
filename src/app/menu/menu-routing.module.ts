import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChambermaidMenuComponent } from './components/chambermaid-menu/chambermaid-menu.component';
import { MenuComponent } from './menu.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';

const routes: Routes = [
  { 
    path: '', component: MenuComponent, 
    children: [
      {
        path:'maid', component: ChambermaidMenuComponent
      },
    ]
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
