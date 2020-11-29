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
import { DiasSemanaEnum } from 'src/app/enums/dias-semana.enum';
import { GridListasComponent } from './components/grid-listas/grid-listas.component';
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { NovaListaComponent } from '../modals/nova-lista/nova-lista.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { ListaProvider } from 'src/app/providers/lista.provider';
import { ListaService } from 'src/app/services/lista.service';
import { ListaController } from 'src/app/controllers/lista.controller';
import { GenerateModal } from 'src/app/services/generate-modal.service';
import { Configuracoes } from 'src/app/providers/configuracoes.provider';
import { TratamentoErroService } from 'src/app/services/tratamento-erro.service';
import { DateService } from 'src/app/services/date.service';

let components = [
  HomeComponent,
  DataComponent,
  GridListasComponent,
  ButtonAddComponent,
  NovaListaComponent,
]

@NgModule({
  entryComponents: [
    ...components
  ],
  declarations: [
    ...components
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
    DiasSemanaEnum,
    ListaProvider,
    ListaController,
    ListaService,
    GenerateModal,
    Configuracoes,
    DateService,
    TratamentoErroService
  ],
})
export class HomeModule { }
