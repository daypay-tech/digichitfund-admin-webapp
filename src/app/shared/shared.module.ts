import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config/config.service';
import { SnackbarService } from './services/snackbar.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ ConfigService, SnackbarService]
})
export class SharedModule { }
