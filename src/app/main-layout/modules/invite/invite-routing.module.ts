import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InviteDatatableComponent } from './invite-datatable/invite-datatable.component';
import { InviteComponent } from './invite.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: InviteComponent,
    children: [
      {
        path: '',
        component: InviteDatatableComponent
      },
    ]
  }
];

    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule],
    })
export class InviteRoutingModule { }
