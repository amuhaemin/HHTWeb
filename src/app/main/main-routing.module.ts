import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { MenuComponent } from './menu/menu.component';
import { StktakingComponent } from './stktaking/stktaking.component';

const routes: Routes = [
  { path: '', component: MainComponent,
    children:[
      { path:'', redirectTo: 'menu' },
      { path: 'menu', component:MenuComponent},
      { path: 'stktaking', component:StktakingComponent },
      { 
        path: 'stktaking', 
        loadChildren: () => import('./stktaking/stktaking.module').then(m => m.StktakingModule) 
      },
    ] 
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
