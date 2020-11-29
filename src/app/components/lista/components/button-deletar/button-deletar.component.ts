import { Component, OnInit } from '@angular/core';
import { ListaProvider } from 'src/app/providers/lista.provider';
import { ListaModel } from 'src/app/models/lista.model';
import { ListaService } from 'src/app/services/lista.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { DialogFactory } from 'src/app/tools/dialog-factory';


@Component({
  selector: 'button-deletar',
  templateUrl: './button-deletar.component.html',
  styleUrls: ['./button-deletar.component.scss']
})
export class ButtonDeletarComponent implements OnInit {

  lista:ListaModel;

  constructor(
    public listaProvider:ListaProvider,
    private _listaService:ListaService,
    private location:Location,
    private _toastr: ToastrService,
    private _dialogFactory: DialogFactory
  ) { }

  ngOnInit(): void {
    this.listaProvider.listaAtual.subscribe(lista =>{
      this.lista = lista;
    });
  }

  deletar(){
    this._dialogFactory.confirm('Remoção de lista', `Voce tem certeza que deseja remover essa lista com todas as suas informações?`, 'Continuar', 'Sair').subscribe(
      async resp => {
        if(resp){
          try{
            await this._listaService.delete(this.lista.id);
            this._toastr.success(`Lista removida com sucesso`);
            this.location.back();
          }
          catch(error){
            this._toastr.error(error.message);
          }
        }
      }
    );
  }

}
