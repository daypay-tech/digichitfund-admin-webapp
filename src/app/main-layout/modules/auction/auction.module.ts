import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionRoutingModule } from './auction-routing.module';
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
import { AuctionComponent } from './auction.component';
import { AuctionDatatableComponent } from './auction-datatable/auction-datatable.component';



@NgModule({
  declarations: [AuctionComponent,AuctionDatatableComponent],
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
    AuctionRoutingModule,
    FlexLayoutModule
  ]
})
export class AuctionModule { }
