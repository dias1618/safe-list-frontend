import { Component, OnInit } from '@angular/core';
import { ListaModel } from 'src/models/lista.model';
import { ListaService } from 'src/services/lista.service';

@Component({
  selector: 'app-grid-listas',
  templateUrl: './grid-listas.component.html',
  styleUrls: ['./grid-listas.component.scss']
})
export class GridListasComponent implements OnInit {

  listas:ListaModel[];

  constructor(
    private _listaService:ListaService
  ) { }

  async ngOnInit(){
    this.listas = await this._listaService.getAll();
  }

  getHorario(lista:ListaModel){
    return `${lista.horaInicial} - ${lista.horaFinal}`;
  }

  getParticipantes(lista:ListaModel){
    return `${lista.participantes.length}/70`;
  }

}
