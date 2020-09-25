import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRoutingModule } from './lista-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { ListaComponent } from './lista.component';
import { TableParticipantesComponent } from './components/table-participantes/table-participantes.component';
import { ButtonAddComponent } from './components/button-add/button-add.component';

let components = [
  ListaComponent,
  TableParticipantesComponent,
  ButtonAddComponent,
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
    ListaRoutingModule,
    SharedModule,
  ],
  providers: []
})
export class ListaModule { }
