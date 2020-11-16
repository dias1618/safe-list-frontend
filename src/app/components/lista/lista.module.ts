import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRoutingModule } from './lista-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { ListaComponent } from './lista.component';
import { TableParticipantesComponent } from './components/table-participantes/table-participantes.component';
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { DiasSemanaEnum } from 'src/app/enums/dias-semana.enum';
import { ResumoComponent } from './components/resumo/resumo.component';
import { NovoParticipanteComponent } from '../modals/novo-participante/novo-participante.component';
import { ParticipanteController } from 'src/app/controllers/participante.controller';
import { ParticipanteService } from 'src/app/services/participante.service';
import { ListaProvider } from 'src/app/providers/lista.provider';
import { ButtonVoltarComponent } from './components/button-voltar/button-voltar.component';
import { CadeiraController } from 'src/app/controllers/cadeira.controller';
import { CadeiraService } from 'src/app/services/cadeira.service';
import { Configuracoes } from 'src/app/providers/configuracoes.provider';
import { MaximoParticipantesValidator } from 'src/app/validators/maximo-participantes.validator';
import { TratamentoErroService } from 'src/app/services/tratamento-erro.service';
import { ParticipanteValidator } from 'src/app/validators/participante.validator';
import { NgxMaskModule, IConfig } from 'ngx-mask'
 
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
 

let components = [
  ListaComponent,
  TableParticipantesComponent,
  ButtonAddComponent,
  ResumoComponent,
  NovoParticipanteComponent
]

@NgModule({
  entryComponents: [
    ...components
  ],
  declarations: [
    ...components,
    ButtonVoltarComponent,
  ],
  imports: [
    CommonModule,
    ListaRoutingModule,
    SharedModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    ListaProvider,
    DiasSemanaEnum,
    ParticipanteController,
    ParticipanteService,
    CadeiraController,
    CadeiraService,
    Configuracoes,
    ParticipanteValidator,
    MaximoParticipantesValidator,
    TratamentoErroService
  ]
})
export class ListaModule { }
