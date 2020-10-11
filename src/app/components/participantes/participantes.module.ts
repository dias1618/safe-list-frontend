import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantesRoutingModule } from './participantes-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { ParticipantesComponent } from './participantes.component';
import { NomeComponent } from './components/nome/nome.component';
import { TelefoneComponent } from './components/telefone/telefone.component';
import { GrupoDependentesComponent } from './components/grupo-dependentes/grupo-dependentes.component';
import { NovoDependenteComponent } from './components/novo-dependente/novo-dependente.component';
import { ResumoDependentesComponent } from './components/resumo-dependentes/resumo-dependentes.component';
import { BotaoCancelarComponent } from './components/botao-cancelar/botao-cancelar.component';
import { BotaoSalvarComponent } from './components/botao-salvar/botao-salvar.component';
import { ParticipanteService } from 'src/app/services/participante.service';
import { ParticipanteController } from 'src/app/controllers/participante.controller';

let components = [
  ParticipantesComponent,
  NomeComponent,
  TelefoneComponent,
  GrupoDependentesComponent,
  NovoDependenteComponent,
  ResumoDependentesComponent,
  BotaoCancelarComponent,
  BotaoSalvarComponent,
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
    ParticipantesRoutingModule,
    SharedModule,
  ],
  providers: [
    ParticipanteService,
    ParticipanteController
  ]
})
export class ParticipantesModule { }
