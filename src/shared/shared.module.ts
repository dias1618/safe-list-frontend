import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AuthController } from 'src/app/controllers/auth.controller';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session.service';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/guards/auth-guard';
import { HeaderComponent } from 'src/app/components/shared/header/header.component';
import { SidenavComponent } from 'src/app/components/shared/sidenav/sidenav.component';
import { NovaListaComponent } from 'src/app/components/modals/nova-lista/nova-lista.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { DateService } from 'src/app/services/date.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

let components = [
  HeaderComponent,
  SidenavComponent,
  NovaListaComponent
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
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule.setLocale('pt-BR')
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
    MatDatepickerModule,
    MatNativeDateModule,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    DateService,
  ]
})
export class SharedModule { }
