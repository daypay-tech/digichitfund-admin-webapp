import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionComponent } from './auction.component';
import { AuctionDatatableComponent } from './auction-datatable/auction-datatable.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: AuctionComponent,
    children: [
      {
        path: '',
        component: AuctionDatatableComponent
      },
    ]
  }
];

    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule],
    })
export class AuctionRoutingModule { }
