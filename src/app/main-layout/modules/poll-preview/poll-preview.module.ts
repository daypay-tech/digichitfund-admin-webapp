import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollPreviewComponent } from './poll-preview.component';
import { PollPreviewRoutingModule } from './poll-preview-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [PollPreviewComponent],
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
    MatListModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatDatepickerModule,
    PollPreviewRoutingModule
  ]
})
export class PollPreviewModule { }
