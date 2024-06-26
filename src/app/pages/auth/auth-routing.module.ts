import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth.component";
import {AuthSignupComponent} from "./auth-signup/auth-signup.component";
import {AuthLoginComponent} from "./auth-login/auth-login.component";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'signup',
        component: AuthSignupComponent
      },
      {
        path: 'login',
        component: AuthLoginComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
