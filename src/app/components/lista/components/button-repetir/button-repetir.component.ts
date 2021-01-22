import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/services/lista.service';
import { FormGroup } from '@angular/forms';
import { ListaProvider } from 'src/app/providers/lista.provider';
import { ListaModel } from 'src/app/models/lista.model';
import { GenerateModal } from 'src/app/services/generate-modal.service';
import { NovaListaComponent } from 'src/app/components/modals/nova-lista/nova-lista.component';

@Component({
  selector: 'button-repetir',
  templateUrl: './button-repetir.component.html',
  styleUrls: ['./button-repetir.component.scss']
})
export class ButtonRepetirComponent implements OnInit {

  constructor(
    private _listaProvider:ListaProvider,
    private _generateModal:GenerateModal
  ) { }

  ngOnInit(): void {
  }

  repetir():void{
    let lista:ListaModel = null;
    
    this._listaProvider.listaAtual.subscribe(listaValue => {
      lista = listaValue;
    });

    this._generateModal.generate({component: NovaListaComponent, afterClose: this.afterAddLista.bind(this), data: lista});
  }


  afterAddLista(result){
    this._listaProvider.listas.push(result);
  }
  
}
