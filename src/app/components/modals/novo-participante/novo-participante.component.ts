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
import { DialogFactory } from 'src/app/tools/dialog-factory';
import { DependenteValidator } from 'src/app/validators/dependente.validator';

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
    @Inject(MAT_DIALOG_DATA) public data: ParticipanteModel,
    private _dialogFactory: DialogFactory,
    private dependenteValidator: DependenteValidator,
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
      this.participante = new ParticipanteModel(await this._participanteService.save(this.participante, this.lista));
      this._toastr.success(`Participante salvo com sucesso`);
      this._dialogRef.close({participante: this.participante, op: 0});
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

  validateDependente(dependente:ParticipanteModel){
    this.dependenteValidator.validate({dependente: dependente, participante: this.participante});
  }

  async adicionarDependente(){
    try{
      this.validateDependente(this.novoDependente);
      if(this.participante.id){
        this.novoDependente.responsavel = this.participante;
        this.novoDependente = await this._participanteService.save(this.novoDependente, null);
        await this._participanteService.addDependente(new ParticipanteModel(this.participante), this.novoDependente);
      }
      this.participante.dependentes.push(this.novoDependente);
      this.novoDependente = new ParticipanteModel();
    }
    catch(error){
      this._toastr.error(`${this.tratamentoErroService.messageErro(error)}`);
    }
  }

  async removerDependente(id:number, index:number){
    if(this.participante.id)
      await this._participanteService.remove(id);
    this.participante.dependentes.splice(index);
  }

  remove(): void {
    this._dialogFactory.confirm('Remoção de participante', `Voce tem certeza que deseja remover esse participante com todas as suas informações?`, 'Continuar', 'Sair').subscribe(
      async resp => {
        if(resp){
          try{
            this._participanteService.remove(this.participante.id);
            this._toastr.success(`Participante removida com sucesso`);
            this._dialogRef.close({participante: this.participante, op: 1});
          }
          catch(error){
            this._toastr.success(error.message);
          }
        }
      }
    );
  }
}
