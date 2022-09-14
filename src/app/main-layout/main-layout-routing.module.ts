import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [

      {
        path: 'dashboard',
        component: DashboardComponent
      },

      {
        path: 'home',
        component: HomeComponent
      },
     
      { 
        path: 'members', 
        loadChildren: () => import('./modules/member/member.module').then((m) => m.MemberModule) 
      },
      { 
        path: 'scheme', 
        loadChildren: () => import('./modules/scheme/scheme.module').then((m) => m.SchemeModule) 
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
