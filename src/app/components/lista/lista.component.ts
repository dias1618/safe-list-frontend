import { Component, OnInit } from '@angular/core';
import { ListaModel } from 'src/app/models/lista.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaService } from 'src/app/services/lista.service';
import { getDay, format } from 'date-fns'
import { DiasSemanaEnum } from 'src/app/enums/dias-semana.enum';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  lista:ListaModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _listaService:ListaService
  ) { }

  async ngOnInit(){
    const listaId:number = Number(this.route.snapshot.paramMap.get('id'));
    this.lista = await this._listaService.get(listaId);
    console.log('lista = ', this.lista)
    
  }

  getTituloLista(){
    if(this.lista)
    return format(new Date(this.lista.data), 'dd/MM/yyyy'); 
  }

  getResumo(){
    if(this.lista)
    return `Participantes cadastrados: ${this.lista.participantes.length}/70`;
  }

}
