import { Component, OnInit } from '@angular/core';
import { ListaModel } from 'src/app/models/lista.model';
import { ListaService } from 'src/app/services/lista.service';
import { ListaProvider } from 'src/app/providers/lista.provider';
import { Router } from '@angular/router';
import { Configuracoes } from 'src/app/providers/configuracoes.provider';

@Component({
  selector: 'grid-proximas-listas',
  templateUrl: './grid-proximas-listas.component.html',
  styleUrls: ['./grid-proximas-listas.component.scss']
})
export class GridProximasListasComponent implements OnInit {

  listas:ListaModel[];

  constructor(
    private _listaProvider:ListaProvider,
    private _listaService:ListaService,
    private router:Router,
    private configuracoes:Configuracoes
  ) { }

  async ngOnInit(){
    this.listas = await this._listaService.getProximos();
  }

  getData(lista:ListaModel){
    return `${this.dateToString(lista.data)}`;
  }

  getHorario(lista:ListaModel){
    return `${this.hourMinuteToString(lista.horaInicial)} - ${this.hourMinuteToString(lista.horaFinal)}`;
  }

  private dateToString(date:Date){
    let month:number = (date.getMonth()+1);
    return  (date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`) + "/" + 
            (month > 9 ? month : `0${month}`) + "/" + 
            (date.getFullYear() > 9 ? date.getFullYear() : `0${date.getFullYear()}`);
  }

  private hourMinuteToString(hourMinuteStr:string){
    let hourMinute:Date = new Date(hourMinuteStr);
    return  (hourMinute.getHours() > 9 ? hourMinute.getHours() : `0${hourMinute.getHours()}`) + ":" + 
            (hourMinute.getMinutes() > 9 ? hourMinute.getMinutes() : `0${hourMinute.getMinutes()}`);
  }

  getParticipantes(lista:ListaModel){
    return `${this._listaProvider.somatorioParticipantes(lista)}/${this.configuracoes.maxParticipantes}`;
  }

  navigate(lista:ListaModel){
    this.router.navigate([`../listas/${lista.id}`]);
  }

}
