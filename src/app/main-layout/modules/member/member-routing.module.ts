import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from './member.component';
import { MemberDatatableComponent } from './member-datatable/member-datatable.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';



const routes: Routes = [
  {
    path: '',
    component: MemberComponent,
    children: [
          {
            path: '',
            component: MemberDatatableComponent,
          },
          {
            path: 'add-member',
            component: AddMemberComponent,
          },
          {
            path: 'edit-member',
            component: EditMemberComponent,
          }
        ]
      }
    ];
    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule],
    })
export class MemberRoutingModule { }
