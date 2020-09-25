import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListaModel } from 'src/app/models/lista.model';
import { ListaService } from 'src/app/services/lista.service';
import { ToastrService } from 'ngx-toastr';

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
    @Inject(MAT_DIALOG_DATA) public lista: ListaModel
  ) { }

  ngOnInit(): void {
    this.lista = new ListaModel();
  }

  changeData($event):void{
    this.lista.data = $event.target.value;
  }

  async salvar(){
    try{
      await this._listaService.save(this.lista);
      this._toastr.success(`Lista incluída com sucesso`);
      this._dialogRef.close(this.lista);
    }
    catch(error){
      this._toastr.error(`${error.response.data.message}`);
    }
  }

  cancel(): void {
    this._dialogRef.close();
  }
}
