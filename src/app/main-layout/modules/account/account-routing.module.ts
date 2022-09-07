import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountDatatableComponent } from './account-datatable/account-datatable.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: '',
        component: AccountDatatableComponent,
      },
      {
        path: 'add-account',
        component: AddAccountComponent,
      },
      {
        path: 'edit-account',
        component: EditAccountComponent,
      }
    ]
  }
];

    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule],
    })
export class AccountRoutingModule { }
