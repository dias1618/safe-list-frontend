import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { AngularMaterialModule } from 'src/shared/angular-material.module';
import { SharedModule } from 'src/shared/shared.module';
import { UsernameComponent } from './components/username/username.component';
import { PasswordComponent } from './components/password/password.component';
import { ButtonEntrarComponent } from './components/button-entrar/button-entrar.component';
import { AuthController } from 'src/controllers/auth.controller';
import { AuthService } from 'src/services/auth.service';
import { SessionService } from 'src/services/session.service';

const routes: Routes = [
  {path: '', component: LoginComponent}
];

let components = [
  LoginComponent
];

@NgModule({
  entryComponents: [
    ...components
  ],
  declarations: [
    ...components,
    UsernameComponent,
    PasswordComponent,
    ButtonEntrarComponent
  ],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
  providers: [
    AuthController,
    AuthService,
    SessionService
  ]
})
export class LoginRoutingModule { }
