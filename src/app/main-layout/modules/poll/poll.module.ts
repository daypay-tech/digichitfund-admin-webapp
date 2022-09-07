import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPollComponent } from './add-poll/add-poll.component';
import { EditPollComponent } from './edit-poll/edit-poll.component';
import { PollDatatableComponent } from './poll-datatable/poll-datatable.component';

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
import { PollRoutingModule } from './poll-routing.module';
import { PollComponent } from './poll.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AddPollComponent,
    EditPollComponent,
    PollDatatableComponent,
    PollComponent
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
    PollRoutingModule,
    MatListModule,
    ReactiveFormsModule,  
    MatDatepickerModule,
    FlexLayoutModule
  ]
})
export class PollModule { }
