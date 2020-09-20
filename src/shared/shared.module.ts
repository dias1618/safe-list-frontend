import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AuthController } from 'src/controllers/auth.controller';
import { AuthService } from 'src/services/auth.service';
import { SessionService } from 'src/services/session.service';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/guards/auth-guard';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { SidenavComponent } from 'src/app/shared/sidenav/sidenav.component';

let components = [
  HeaderComponent,
  SidenavComponent,
]

let modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  AngularMaterialModule,
  FlexLayoutModule,
  RouterModule,
]

@NgModule({
  entryComponents: [
    ...components
  ],
  declarations: [
    ...components
  ],
  imports: [
    ...modules,
  ],
  exports: [
    ...components,
    ...modules
  ],
  providers: [
    AuthController,
    AuthService,
    SessionService,
    AuthGuard,
  ]
})
export class SharedModule { }
