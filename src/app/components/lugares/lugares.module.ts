import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LugaresRoutingModule } from './lugares-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { LugaresComponent } from './lugares.component';
import { GridBancosComponent } from './components/grid-bancos/grid-bancos.component';
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { ButtonAddAllComponent } from './components/button-add-all/button-add-all.component';
import { BancoController } from 'src/app/controllers/banco.controller';
import { BancoService } from 'src/app/services/banco.service';
import { BancoProvider } from 'src/app/providers/banco.provider';
import { NovoBancoComponent } from '../modals/novo-banco/novo-banco.component';
import { CadeiraService } from 'src/app/services/cadeira.service';
import { CadeiraController } from 'src/app/controllers/cadeira.controller';
import { AddVariosLugaresComponent } from '../modals/add-varios-lugares/add-varios-lugares.component';
import { ButtonRemoveAllComponent } from './components/button-remove-all/button-remove-all.component';
import { ConfirmDialog } from 'src/app/tools/confirm-dialog';
import { DialogFactory } from 'src/app/tools/dialog-factory';
import { AlertDialog } from 'src/app/tools/alert-dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

let components = [
  LugaresComponent,
  GridBancosComponent,
  ButtonAddComponent,
  ButtonAddAllComponent,
  NovoBancoComponent,
  AddVariosLugaresComponent,
  ButtonRemoveAllComponent,
  ConfirmDialog,
  AlertDialog
]

@NgModule({
  entryComponents: [
    ...components
  ],
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    LugaresRoutingModule,
    SharedModule,
  ],
  providers: [
    BancoProvider,
    BancoController,
    BancoService,
    CadeiraService,
    CadeiraController,
    DialogFactory,
    MatSnackBar
  ]
})
export class LugaresModule { }
