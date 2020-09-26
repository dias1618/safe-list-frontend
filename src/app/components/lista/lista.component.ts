import { Component, OnInit } from '@angular/core';
import { ListaModel } from 'src/app/models/lista.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaService } from 'src/app/services/lista.service';
import { getDay, format, getHours, getMinutes } from 'date-fns'
import { DiasSemanaEnum } from 'src/app/enums/dias-semana.enum';
import { ListaProvider } from 'src/app/providers/lista.provider';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  constructor(
    public listaProvider:ListaProvider,
    private route: ActivatedRoute,
    private _listaService:ListaService,
    private diasSemanaEnum:DiasSemanaEnum
  ) { }

  async ngOnInit(){
    const listaId = Number(this.route.snapshot.paramMap.get('id'));
    this.listaProvider.updateLista(await this._listaService.get(listaId));
  }

  getTituloLista(){
    let tituloLista = '';
    this.listaProvider.listaAtual.subscribe(lista => {
      if(lista.data){
        let data = new Date(lista.data);
        let horaInicial = new Date(lista.horaInicial);
        let horaFinal = new Date(lista.horaFinal);
        tituloLista = `${format(data, 'dd/MM/yyyy')} (${this.diasSemanaEnum.getWeekDay(getDay(data))}) ${format(horaInicial, 'HH:mm')} - ${format(horaFinal, 'HH:mm')}`; 
      }
    });
    return tituloLista;
  }

}
