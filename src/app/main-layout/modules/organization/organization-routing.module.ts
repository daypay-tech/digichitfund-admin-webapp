import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationComponent } from './organization.component';
import { OrganizationDatatableComponent } from './organization-datatable/organization-datatable.component';
import { AddOrganizationComponent } from './add-organization/add-organization.component';
import { EditOrganizationComponent } from './edit-organization/edit-organization.component';



const routes: Routes = [
  {
    path: '',
    component: OrganizationComponent,
    children: [
      {
        path: '',
        component: OrganizationDatatableComponent,
      },
      {
        path: 'add-organization',
        component: AddOrganizationComponent,
      },
      {
        path: 'edit-organization',
        component: EditOrganizationComponent,
      }
    ]
  }
];

    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule],
    })
export class OrganizationRoutingModule { }
