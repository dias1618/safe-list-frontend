import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { HeaderComponent } from '../shared/header/header.component';
import { HomeComponent } from './home.component';
import { SidenavComponent } from '../shared/sidenav/sidenav.component';
import { DataComponent } from './components/data/data.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { DiasSemanaEnum } from 'src/enums/dias-semana.enum';
import { GridListasComponent } from './components/grid-listas/grid-listas.component';
import { ButtonAddComponent } from './components/button-add/button-add.component';


@NgModule({
  entryComponents: [
    DataComponent,
    GridListasComponent
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    DataComponent,
    GridListasComponent,
    ButtonAddComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule 
  ],
  providers: [  
    MatDatepickerModule,
    MatNativeDateModule,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    DiasSemanaEnum
  ],
})
export class HomeModule { }
