import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemeComponent } from './scheme.component';
import { SchemeDatatableComponent } from './scheme-datatable/scheme-datatable.component';
import { AddSchemeComponent } from './add-scheme/add-scheme.component';
import { EditSchemeComponent } from './edit-scheme/edit-scheme.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: SchemeComponent,
    children: [
      {
        path: '',
        component: SchemeDatatableComponent
      },
      {
        path: 'add-scheme',
        component: AddSchemeComponent,
      },
      {
        path: 'edit-scheme',
        component: EditSchemeComponent,
      }
    ]
  }
];

    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule],
    })
export class SchemeRoutingModule { }
