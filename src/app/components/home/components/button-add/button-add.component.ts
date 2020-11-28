import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NovaListaComponent } from 'src/app/components/modals/nova-lista/nova-lista.component';
import { ListaModel } from 'src/app/models/lista.model';
import { ListaProvider } from 'src/app/providers/lista.provider';
import { GenerateModal } from 'src/app/services/generate-modal.service';

@Component({
  selector: 'button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss']
})
export class ButtonAddComponent implements OnInit {

  listas:ListaModel[];

  constructor(
    public _listaProvider: ListaProvider,
    public _generateModal: GenerateModal
  ) { }

  ngOnInit(): void {
  }

  addLista($event){
    this._generateModal.generate({component: NovaListaComponent, afterClose: this.afterAddLista.bind(this)});
  }

  afterAddLista(result){
    this._listaProvider.listas.push(result);
  }
  

}
