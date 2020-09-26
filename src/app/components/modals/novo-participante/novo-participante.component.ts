import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ParticipanteModel } from 'src/app/models/participante.model';
import { ParticipanteService } from 'src/app/services/participante.service';

@Component({
  selector: 'app-novo-participante',
  templateUrl: './novo-participante.component.html',
  styleUrls: ['./novo-participante.component.scss']
})
export class NovoParticipanteComponent implements OnInit {

  participante: ParticipanteModel;

  constructor(
    private _participanteService:ParticipanteService,
    private _dialogRef: MatDialogRef<NovoParticipanteComponent>,
    private _toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: ParticipanteModel
  ) { }

  ngOnInit(): void {
    if(!this.data['participante'])
      this.participante = new ParticipanteModel();
    else
      this.participante = new ParticipanteModel(this.data['participante'].toJson());
  }

  async salvar(){
    try{
      this.participante = await this._participanteService.save(this.participante);
      this._toastr.success(`Participante incluído com sucesso`);
      this._dialogRef.close(this.participante);
    }
    catch(error){
      console.log(error)
      this._toastr.error(`${error.response.data.message}`);
    }
  }

  cancel(): void {
    this._dialogRef.close();
  }
}
