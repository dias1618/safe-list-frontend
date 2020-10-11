import { Component, OnInit, Input } from '@angular/core';
import { ParticipanteModel } from 'src/app/models/participante.model';

@Component({
  selector: 'app-nome',
  templateUrl: './nome.component.html',
  styleUrls: ['./nome.component.scss']
})
export class NomeComponent implements OnInit {

  @Input() participante:ParticipanteModel;

  constructor() { }

  ngOnInit(): void {
  }

}
