import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {  MatPaginatorModule } from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SpinnerComponent } from './core/components/spinner/spinner.component';
import { ErrorComponent } from './core/components/error/error.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainLayoutModule } from './main-layout/main-layout.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { GenderChartComponent } from './dashboard/gender-chart/gender-chart.component';
import { AgeChartComponent } from './dashboard/age-chart/age-chart.component';
import { TrendingChartComponent } from './dashboard/trending-chart/trending-chart.component';
import { QuestionChartComponent } from './dashboard/question-chart/question-chart.component';
import { DashboardService } from './dashboard/dashboard-service/dashboard.service';
import { DatePipe } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgChartsModule } from 'ng2-charts';
import { ProgressBarColorDirective } from './directives/progress-bar-color/progress-bar-color.directive';
import { PreLoginComponent } from './pre-login/pre-login.component';
import { HttpRequestInterceptor } from './core/interceptor/http-request.interceptor';
import { GlobalErrorHandler } from './core/global-error-handler';


@NgModule({
  declarations: [		
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
    SpinnerComponent,
    ErrorComponent,
    GenderChartComponent,
    AgeChartComponent,
    TrendingChartComponent,
    QuestionChartComponent,
    ProgressBarColorDirective,
    PreLoginComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatStepperModule,
    MatNativeDateModule,
    MainLayoutModule,
    HttpClientModule,
    NgChartsModule,
    FlexLayoutModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
  ],
  providers: [DashboardService, DatePipe,  
    {  provide: HTTP_INTERCEPTORS,  useClass: HttpRequestInterceptor,   multi: true  },
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
