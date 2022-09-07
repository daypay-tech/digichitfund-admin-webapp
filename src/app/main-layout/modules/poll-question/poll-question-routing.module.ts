import { PollQuestionComponent } from './poll-question.component';
import { PollQuestionDatatableComponent } from './poll-question-datatable/poll-question-datatable.component';
import { AddPollQuestionComponent } from './add-poll-question/add-poll-question.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPollQuestionComponent } from './edit-poll-question/edit-poll-question.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: PollQuestionComponent,
    children: [
          {
            path: '',
            component: PollQuestionDatatableComponent,
          },
          {
            path: 'add-poll-question',
            component: AddPollQuestionComponent,
          },
          {
            path: 'edit-poll-question',
            component: EditPollQuestionComponent,
          }
        ]
      }
    ];
    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule],
    })
export class PollQuestionRoutingModule { }
