import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPollQuestionComponent } from './add-poll-question/add-poll-question.component';
import { EditPollQuestionComponent } from './edit-poll-question/edit-poll-question.component';
import { PollQuestionDatatableComponent } from './poll-question-datatable/poll-question-datatable.component';
import { PollQuestionRoutingModule } from './poll-question-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { PollQuestionComponent } from './poll-question.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatDialogModule } from '@angular/material/dialog';
import { AddPollQuestionOptionDialogComponent } from './add-poll-question-option-dialog/add-poll-question-option-dialog.component';
import { ViewPollQuestionDialogComponent } from './view-poll-question-dialog/view-poll-question-dialog.component';
import { EditPollQuestionOptionDialogComponent } from './edit-poll-question-option-dialog/edit-poll-question-option-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AddPollQuestionComponent,
    EditPollQuestionComponent,
    PollQuestionDatatableComponent,
    PollQuestionComponent,
    AddPollQuestionOptionDialogComponent,
    ViewPollQuestionDialogComponent,
    EditPollQuestionOptionDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    PollQuestionRoutingModule,
    MatListModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatDatepickerModule,
  ]
})
export class PollQuestionModule { }
