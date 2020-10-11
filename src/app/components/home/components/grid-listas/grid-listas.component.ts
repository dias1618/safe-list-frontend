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

  constructor(
    public _listaProvider:ListaProvider,
    private _listaService:ListaService,
    private router:Router
  ) { }

  async ngOnInit(){
    this._listaProvider.listas = await this._listaService.getByDate(new Date());
  }

  getHorario(lista:ListaModel){
    return `${this.hourMinuteToString(lista.horaInicial)} - ${this.hourMinuteToString(lista.horaFinal)}`;
  }

  private hourMinuteToString(hourMinuteStr:string){
    let hourMinute:Date = new Date(hourMinuteStr);
    return  (hourMinute.getHours() > 9 ? hourMinute.getHours() : `0${hourMinute.getHours()}`) + ":" + 
            (hourMinute.getMinutes() > 9 ? hourMinute.getMinutes() : `0${hourMinute.getMinutes()}`);
  }

  getParticipantes(lista:ListaModel){
    return `${lista.participantes.length}/70`;
  }

  navigate(lista:ListaModel){
    this.router.navigate([`../listas/${lista.id}`]);
  }

}
