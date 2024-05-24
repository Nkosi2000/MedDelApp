import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPagePage } from './landing-page.page';

const routes: Routes = [
  {
    path: 'landing-page',
    component: LandingPagePage,
    children: [
      {
        path: 'login-page',
        loadChildren: () => import('C:/Users/nkosi/MedDelApp/src/app/login-page/login-page.module').then(m => m.LoginPagePageModule)
      },
      {
        path:'signup-page',
        loadChildren: () => import('C:/Users/nkosi/MedDelApp/src/app/signup-page/signup-page.module').then(m =>m.SignupPagePageModule)
      },
      {
        path:'forgot-password-page',
        loadChildren: () => import('C:/Users/nkosi/MedDelApp/src/app/forgot-password-page/forgot-password-page.module').then(m =>m.ForgotPasswordPagePageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'C:/Users/nkosi/MedDelApp/src/app/home/landing-page',
    pathMatch: 'full',
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPagePageRoutingModule {}
