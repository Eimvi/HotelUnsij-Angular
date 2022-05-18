import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChambermaidMenuComponent } from './components/chambermaid-menu/chambermaid-menu.component';
import { MenuComponent } from './menu.component';

const routes: Routes = [
  { 
    path: '', component: MenuComponent, 
    children: [
      {
        path:'maid', component: ChambermaidMenuComponent
      },
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
