import { Component, OnInit } from '@angular/core';
import { BancoService } from 'src/app/services/banco.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-varios-lugares',
  templateUrl: './add-varios-lugares.component.html',
  styleUrls: ['./add-varios-lugares.component.scss']
})
export class AddVariosLugaresComponent implements OnInit {

  quantidade:number;

  constructor(
    private _bancoService:BancoService,
    private _dialogRef: MatDialogRef<AddVariosLugaresComponent>,
    private _toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  async salvar(){
    try{
      await this._bancoService.saveMany(this.quantidade);
      this._toastr.success(`Banco incluído com sucesso`);
      this._dialogRef.close();
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
