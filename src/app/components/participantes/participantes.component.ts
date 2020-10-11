import { Component, OnInit } from '@angular/core';
import { ParticipanteModel } from 'src/app/models/participante.model';
import { ActivatedRoute } from '@angular/router';
import { ParticipanteService } from 'src/app/services/participante.service';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.scss']
})
export class ParticipantesComponent implements OnInit {

  participante:ParticipanteModel;

  constructor(
    private activatedRoute:ActivatedRoute,
    private _participante:ParticipanteService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (data) => {
      let id = data['id'];
      this.participante = await this._participante.get(id);
    });
  }

}
