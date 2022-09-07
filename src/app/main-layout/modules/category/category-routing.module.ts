import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { PollDatatableComponent } from '../poll/poll-datatable/poll-datatable.component';
import { CategoryDatatableComponent } from './category-datatable/category-datatable.component';
import { CategoryComponent } from './category.component';


const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    children: [
      {
        path: '',
        component: CategoryDatatableComponent
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
      },
      {
        path: 'edit-category',
        component: EditCategoryComponent,
      }
    ]
  }
];

    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule],
    })
export class CategoryRoutingModule { }
