import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InviteRoutingModule } from './invite-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { InviteComponent } from './invite.component';
import { InviteDatatableComponent } from './invite-datatable/invite-datatable.component';



@NgModule({
  declarations: [InviteComponent,InviteDatatableComponent],
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
    MatDatepickerModule,
    InviteRoutingModule,
    FlexLayoutModule
  ]
})
export class InviteModule { }
