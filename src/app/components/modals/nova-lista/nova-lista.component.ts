import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListaModel } from 'src/app/models/lista.model';
import { ListaService } from 'src/app/services/lista.service';
import { ToastrService } from 'ngx-toastr';
import { DateService } from 'src/app/services/date.service';
import { TratamentoErroService } from 'src/app/services/tratamento-erro.service';
import { ParticipanteService } from 'src/app/services/participante.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nova-lista',
  templateUrl: './nova-lista.component.html',
  styleUrls: ['./nova-lista.component.scss']
})
export class NovaListaComponent implements OnInit {

  constructor(
    private _listaService:ListaService,
    private _dialogRef: MatDialogRef<NovaListaComponent>,
    private _toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public lista: ListaModel,
    private _dateService: DateService,
    private _tratamentoErroService:TratamentoErroService,
    private _participanteService:ParticipanteService,
    private location:Location
  ) { }

  popWindows:boolean = false;

  ngOnInit(): void {
    if(!this.lista)
      this.lista = new ListaModel();
    else{
      this.popWindows=true;
      this.lista = Object.assign(this.lista, ListaModel);
      this.lista.id = null;
      this.lista.data = null;
      this.lista.horaInicial = null;
      this.lista.horaFinal = null;
      for(let participante of this.lista.participantes){
        participante.id = null;
        for(let dependente of participante.dependentes){
          dependente.id = null;
        }
      }
    }
  }

  changeData($event):void{
    this.lista.data = $event.target.value;
  }

  async salvar(){
    try{
      this.validate();
      this.lista.horaInicial = this._dateService.isoDate(this.lista.horaInicial)+'-03:00';
      this.lista.horaFinal = this._dateService.isoDate(this.lista.horaFinal)+'-03:00';
      this.lista = await this._listaService.save(this.lista);
      await this.salvarParticipantes();
      this._toastr.success(`Lista incluída com sucesso`);
      this._dialogRef.close(this.lista);
      if(this.popWindows)
        this.location.back();
    }
    catch(error){
      this._toastr.error(this._tratamentoErroService.messageErro(error));
    }
  }

  async salvarParticipantes(){
    for(let participante of this.lista.participantes){
      if(!participante.fixo)
        continue;
      participante = await this._participanteService.save(participante, this.lista);
      for(let dependente of participante.dependentes){
        dependente = await this._participanteService.save(dependente, null);
        await this._participanteService.addDependente(participante, dependente);
      }
    }
  }

  validate(){
    if(this.lista.data == null)
      throw new Error('Data inválida ou nula');
    if(this.lista.horaInicial == null)
      throw new Error('Hora Inicial inválida ou nula');
    if(this.lista.horaFinal == null)
      throw new Error('Hora Final inválida ou nula');  
  }

  cancel(): void {
    this._dialogRef.close();
  }
}
