import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginFormComponent,
  },
  
  {
    path: 'main',
    loadChildren: () => import(`./main-layout/main-layout.module`).then(
      (module) => module.MainLayoutModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
