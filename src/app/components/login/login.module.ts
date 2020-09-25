import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { LoginComponent } from './login.component';
import { UsernameComponent } from './components/username/username.component';
import { PasswordComponent } from './components/password/password.component';
import { ButtonEntrarComponent } from './components/button-entrar/button-entrar.component';


let components = [
  LoginComponent,
  UsernameComponent,
  PasswordComponent,
  ButtonEntrarComponent
];

@NgModule({
  entryComponents: [
    ...components
  ],
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule, 
    SharedModule
  ]
})
export class LoginModule { }
