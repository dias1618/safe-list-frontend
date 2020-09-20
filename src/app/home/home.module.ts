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
import { NovaListaComponent } from '../modals/nova-lista/nova-lista.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { ListaService } from 'src/services/lista.service';

@NgModule({
  entryComponents: [
    DataComponent,
    GridListasComponent,
    NovaListaComponent,
  ],
  declarations: [
    HomeComponent,
    DataComponent,
    GridListasComponent,
    ButtonAddComponent,
    NovaListaComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule.setLocale('pt-BR')
  ],
  providers: [  
    MatDatepickerModule,
    MatNativeDateModule,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    DiasSemanaEnum
  ],
})
export class HomeModule { }
