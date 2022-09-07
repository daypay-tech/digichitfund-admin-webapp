import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { CategoryRoutingModule } from "../category/category-routing.module";
import { AddOrganizationComponent } from "./add-organization/add-organization.component";
import { EditOrganizationComponent } from "./edit-organization/edit-organization.component";
import { OrganizationDatatableComponent } from "./organization-datatable/organization-datatable.component";
import { OrganizationRoutingModule } from "./organization-routing.module";
import { OrganizationComponent } from "./organization.component";

@NgModule({
    declarations: [
      OrganizationComponent,
      AddOrganizationComponent,
      OrganizationDatatableComponent,
      EditOrganizationComponent
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
      OrganizationRoutingModule,
      FlexLayoutModule
    ]
  })
  export class OrganizationModule { }