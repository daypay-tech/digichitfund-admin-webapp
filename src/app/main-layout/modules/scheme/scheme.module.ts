import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSchemeComponent } from './add-scheme/add-scheme.component';
import { EditSchemeComponent } from './edit-scheme/edit-scheme.component';
import { SchemeDatatableComponent } from './scheme-datatable/scheme-datatable.component';
import { SchemeComponent } from './scheme.component';
import { SchemeRoutingModule } from './scheme-routing.module';
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


@NgModule({
  declarations: [
    AddSchemeComponent,
    EditSchemeComponent,
    SchemeDatatableComponent,
    SchemeComponent
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
    MatListModule,
    MatDatepickerModule,
    SchemeRoutingModule,
    FlexLayoutModule
  ]
})
export class SchemeModule { }
