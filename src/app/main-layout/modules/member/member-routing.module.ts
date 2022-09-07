import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from './member.component';
import { MemberDatatableComponent } from './member-datatable/member-datatable.component';



const routes: Routes = [
  {
    path: '',
    component: MemberComponent,
    children: [
          {
            path: '',
            component: MemberDatatableComponent,
          }
        ]
      }
    ];
    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule],
    })
export class MemberRoutingModule { }
