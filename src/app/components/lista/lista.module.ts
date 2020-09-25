import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRoutingModule } from './lista-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { ListaComponent } from './lista.component';


@NgModule({
  entryComponents: [
    
  ],
  declarations: [
    ListaComponent,
  ],
  imports: [
    CommonModule,
    ListaRoutingModule,
    SharedModule,
  ],
  providers: []
})
export class ListaModule { }
