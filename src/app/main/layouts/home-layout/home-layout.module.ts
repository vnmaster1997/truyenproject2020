import { SignupComponent } from './../../signup/signup.component';
import { LoginComponent } from './../../login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLayoutRoutingModule } from './home-layout-routing.module';


@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    HomeLayoutRoutingModule
  ]
})
export class HomeLayoutModule { }
