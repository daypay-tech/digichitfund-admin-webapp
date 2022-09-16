import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [

     
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
      { 
        path: 'auction', 
        loadChildren: () => import('./modules/auction/auction.module').then((m) => m.AuctionModule) 
      },
      { 
        path: 'invite', 
        loadChildren: () => import('./modules/invite/invite.module').then((m) => m.InviteModule) 
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
