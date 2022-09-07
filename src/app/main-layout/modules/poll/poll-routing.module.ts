import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollDatatableComponent } from './poll-datatable/poll-datatable.component';
import { RouterModule, Routes } from '@angular/router';
import { AddPollComponent } from './add-poll/add-poll.component';
import { EditPollComponent } from './edit-poll/edit-poll.component';
import { PollComponent } from './poll.component';


const routes: Routes = [
  {
    path: '',
    component: PollComponent,
    children: [
          {
            path: '',
            component: PollDatatableComponent,
          },
          {
            path: 'add-poll',
            component: AddPollComponent,
          },
          {
            path: 'edit-poll',
            component: EditPollComponent,
          }
        ]
      }
    ];
    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule],
    })
export class PollRoutingModule { }
