import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ParticipanteModel } from 'src/app/models/participante.model';
import { ParticipanteService } from 'src/app/services/participante.service';
import { CadeiraModel } from 'src/app/models/cadeira.model';
import { CadeiraService } from 'src/app/services/cadeira.service';

@Component({
  selector: 'app-novo-participante',
  templateUrl: './novo-participante.component.html',
  styleUrls: ['./novo-participante.component.scss']
})
export class NovoParticipanteComponent implements OnInit {

  participante: ParticipanteModel;
  novoDependente:ParticipanteModel;
  novaCadeira:CadeiraModel;

  constructor(
    private _participanteService:ParticipanteService,
    private _cadeiraService:CadeiraService,
    private _dialogRef: MatDialogRef<NovoParticipanteComponent>,
    private _toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: ParticipanteModel
  ) { }

  ngOnInit(): void {
    this.novoDependente = new ParticipanteModel();
    this.novaCadeira = new CadeiraModel();
    if(!this.data['participante'])
      this.participante = new ParticipanteModel();
    else
      this.participante = new ParticipanteModel(this.data['participante']);
  }

  async salvar(){
    try{
      this.participante.id = (await this._participanteService.save(this.participante)).id;
      this._toastr.success(`Participante incluído com sucesso`);
      this._dialogRef.close(this.participante);
    }
    catch(error){
      console.log(error)
      this._toastr.error(`${error.response.data.message}`);
    }
  }

  async adicionarDependente(){
    this.novoDependente = await this._participanteService.save(this.novoDependente);
    this.participante.dependentes.push(this.novoDependente);
    await this._participanteService.addDependente(new ParticipanteModel(this.participante), this.novoDependente);
    this.novoDependente = new ParticipanteModel();
  }

  async removerDependente(id:number, index:number){
    await this._participanteService.remove(id);
    this.participante.dependentes.splice(index);
  }

  async adicionarCadeira(){
    this.novaCadeira = await this._cadeiraService.save(this.novaCadeira);
    this.participante.cadeiras.push(this.novaCadeira);
    await this._participanteService.addCadeira(new ParticipanteModel(this.participante), this.novaCadeira);
    this.novaCadeira = new CadeiraModel();
  }

  async removerCadeira(id:number, index:number){
    await this._cadeiraService.remove(id);
    this.participante.cadeiras.splice(index);
  }

  cancel(): void {
    this._dialogRef.close();
  }
}
