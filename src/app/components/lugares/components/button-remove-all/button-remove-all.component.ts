import { Component, OnInit } from '@angular/core';
import { BancoService } from 'src/app/services/banco.service';
import { BancoProvider } from 'src/app/providers/banco.provider';
import { DialogFactory } from 'src/app/tools/dialog-factory';

@Component({
  selector: 'app-button-remove-all',
  templateUrl: './button-remove-all.component.html',
  styleUrls: ['./button-remove-all.component.scss']
})
export class ButtonRemoveAllComponent implements OnInit {

  constructor(
    private _bancoProvider:BancoProvider,
    private _bancoService:BancoService,
    private _dialogFactory:DialogFactory
  ) { }

  ngOnInit(): void {
  }

  removeBancos($event){
    this._dialogFactory.confirm('Atenção!', 'Deseja realmente remover todos os bancos cadastrados?').subscribe(
      async resp => {
          if (resp) {
            this._bancoService.removeAll();
            this._bancoProvider.bancos = [];
          }
      }
    );

    
  }

}
