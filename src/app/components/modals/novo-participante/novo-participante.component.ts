import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ParticipanteModel } from 'src/app/models/participante.model';
import { ParticipanteService } from 'src/app/services/participante.service';
import { CadeiraModel } from 'src/app/models/cadeira.model';
import { MaximoParticipantesValidator } from 'src/app/validators/maximo-participantes.validator';
import { ListaModel } from 'src/app/models/lista.model';
import { TratamentoErroService } from 'src/app/services/tratamento-erro.service';
import { ParticipanteValidator } from 'src/app/validators/participante.validator';

@Component({
  selector: 'app-novo-participante',
  templateUrl: './novo-participante.component.html',
  styleUrls: ['./novo-participante.component.scss']
})
export class NovoParticipanteComponent implements OnInit {

  participante: ParticipanteModel;
  lista:ListaModel;
  novoDependente:ParticipanteModel;
  novaCadeira:CadeiraModel;

  constructor(
    private _participanteService:ParticipanteService,
    private _dialogRef: MatDialogRef<NovoParticipanteComponent>,
    private _toastr: ToastrService,
    private maximoParticipantesValidator: MaximoParticipantesValidator,
    private participanteValidator: ParticipanteValidator,
    private tratamentoErroService:TratamentoErroService,
    @Inject(MAT_DIALOG_DATA) public data: ParticipanteModel
  ) { }

  ngOnInit(): void {
    this.novoDependente = new ParticipanteModel();
    this.novaCadeira = new CadeiraModel();
    this.participante = new ParticipanteModel(this.data['participante']);
    this.lista = new ListaModel(this.data['lista']);
  }

  async salvar(){
    try{
      this.validate(this.participante);
      this.participante.id = (await this._participanteService.save(this.participante, this.lista)).id;
      this._toastr.success(`Participante salvo com sucesso`);
      this._dialogRef.close(this.participante);
    }
    catch(error){
      this._toastr.error(`${this.tratamentoErroService.messageErro(error)}`);
    }
  }

  validate(participante:ParticipanteModel){
    this.participanteValidator.validate({participante: participante});
    if(!participante.id)
      this.maximoParticipantesValidator.validate({lista: new ListaModel(this.data['lista']), participante: participante});
  }

  async adicionarDependente(){
    if(this.participante.id){
      this.novoDependente = await this._participanteService.save(this.novoDependente, null);
      await this._participanteService.addDependente(new ParticipanteModel(this.participante), this.novoDependente);
    }
    this.participante.dependentes.push(this.novoDependente);
    this.novoDependente = new ParticipanteModel();
  }

  async removerDependente(id:number, index:number){
    if(this.participante.id)
      await this._participanteService.remove(id);
    this.participante.dependentes.splice(index);
  }

  cancel(): void {
    this._dialogRef.close();
  }
}
