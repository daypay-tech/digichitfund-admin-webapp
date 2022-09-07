import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollPreviewComponent } from './poll-preview.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PollPreviewComponent,
  }
];
   
@NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule],
    })
export class PollPreviewRoutingModule { }
