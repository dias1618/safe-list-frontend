import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListaModel } from 'src/app/models/lista.model';
import { ListaService } from 'src/app/services/lista.service';
import { ToastrService } from 'ngx-toastr';
import { DateService } from 'src/app/services/date.service';
import { TratamentoErroService } from 'src/app/services/tratamento-erro.service';

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
    private _tratamentoErroService:TratamentoErroService
  ) { }

  ngOnInit(): void {
    this.lista = new ListaModel();
  }

  changeData($event):void{
    this.lista.data = $event.target.value;
  }

  async salvar(){
    try{
      this.validate();
      this.lista.horaInicial = this._dateService.isoDate(this.lista.horaInicial);
      this.lista.horaFinal = this._dateService.isoDate(this.lista.horaFinal);
      this.lista = await this._listaService.save(this.lista);
      this._toastr.success(`Lista incluída com sucesso`);
      this._dialogRef.close(this.lista);
    }
    catch(error){
      this._toastr.error(this._tratamentoErroService.messageErro(error));
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
