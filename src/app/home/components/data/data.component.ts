import { Component, OnInit } from '@angular/core';
import { getDay } from 'date-fns'
import { DiasSemanaEnum } from 'src/enums/dias-semana.enum';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  diaSemana:string;

  constructor(
    private diasSemanaEnum:DiasSemanaEnum
  ) { }

  ngOnInit(): void {
  }

  changeData($event){
    this.diaSemana = this.diasSemanaEnum.getWeekDay(getDay($event.value));
    console.log('dia = ', this.diaSemana)
  }
}
