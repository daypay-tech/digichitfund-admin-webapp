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
        path: 'poll', 
        loadChildren: () => import('./modules/poll/poll.module').then((m) => m.PollModule) 
      },
      { 
        path: 'category', 
        loadChildren: () => import('./modules/category/category.module').then((m) => m.CategoryModule) 
      },
      { 
        path: 'poll-question', 
        loadChildren: () => import('./modules/poll-question/poll-question.module').then((m) => m.PollQuestionModule) 
      },
      { 
        path: 'members', 
        loadChildren: () => import('./modules/member/member.module').then((m) => m.MemberModule) 
      },
      { 
        path: 'poll-preview', 
        loadChildren: () => import('./modules/poll-preview/poll-preview.module').then((m) => m.PollPreviewModule) 
      },
      { 
        path: 'organization', 
        loadChildren: () => import('./modules/organization/organization.module').then((m) => m.OrganizationModule) 
      },
      { 
        path: 'account', 
        loadChildren: () => import('./modules/account/account.module').then((m) => m.AccountModule) 
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
