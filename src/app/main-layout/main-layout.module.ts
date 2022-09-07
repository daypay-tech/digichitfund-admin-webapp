import { HomeComponent } from './../home/home.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainLayoutComponent } from './main-layout.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MemberModule } from './modules/member/member.module';
import {MatBadgeModule} from '@angular/material/badge'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OrganizationModule } from './modules/organization/organization.module';


@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, SideNavComponent,HomeComponent ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    FlexLayoutModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MainLayoutRoutingModule,
    MemberModule,
    MatBadgeModule,
    MatSidenavModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainLayoutModule { }
