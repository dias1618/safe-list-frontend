import { Component, OnInit } from '@angular/core';
import { ListaModel } from 'src/app/models/lista.model';
import { ListaService } from 'src/app/services/lista.service';
import { ListaProvider } from 'src/app/providers/lista.provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-listas',
  templateUrl: './grid-listas.component.html',
  styleUrls: ['./grid-listas.component.scss']
})
export class GridListasComponent implements OnInit {

  listas:ListaModel[];

  constructor(
    public _listaProvider:ListaProvider,
    private _listaService:ListaService,
    private router:Router
  ) { }

  async ngOnInit(){
    this._listaProvider.listas = await this._listaService.getAll();
  }

  getHorario(lista:ListaModel){
    return `${lista.horaInicial} - ${lista.horaFinal}`;
  }

  getParticipantes(lista:ListaModel){
    return `${lista.participantes.length}/70`;
  }

  navigate(lista:ListaModel){
    this.router.navigate([`../listas/${lista.id}`]);
  }

}
