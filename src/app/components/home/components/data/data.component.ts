import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { getDay } from 'date-fns'
import { DiasSemanaEnum } from 'src/app/enums/dias-semana.enum';
import { ListaProvider } from 'src/app/providers/lista.provider';
import { format, compareAsc } from 'date-fns'
import { ListaService } from 'src/app/services/lista.service';


@Component({
  selector: 'data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit, AfterViewInit {

  @ViewChild('data', {static: false}) data:ElementRef;
  diaSemana:string;

  constructor(
    private diasSemanaEnum:DiasSemanaEnum,
    private _listaProvider: ListaProvider,
    private _listaService:ListaService,
  ) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit():void{
    this.data.nativeElement.value = format(new Date(), 'dd/MM/yyyy');
  }

  async changeData($event){
    this.diaSemana = this.diasSemanaEnum.getWeekDay(getDay($event.value));
    this._listaProvider.listas = await this._listaService.getByDate(new Date($event.value)); 
  }
}
