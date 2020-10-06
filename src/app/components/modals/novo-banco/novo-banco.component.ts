import { Component, OnInit, Inject } from '@angular/core';
import { CadeiraModel } from 'src/app/models/cadeira.model';
import { BancoModel } from 'src/app/models/banco.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BancoService } from 'src/app/services/banco.service';
import { CadeiraService } from 'src/app/services/cadeira.service';

@Component({
  selector: 'app-novo-banco',
  templateUrl: './novo-banco.component.html',
  styleUrls: ['./novo-banco.component.scss']
})
export class NovoBancoComponent implements OnInit {

  banco: BancoModel;
  novoCadeira:CadeiraModel;

  constructor(
    private _bancoService:BancoService,
    private _cadeiraService:CadeiraService,
    private _dialogRef: MatDialogRef<NovoBancoComponent>,
    private _toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: BancoModel
  ) { }

  ngOnInit(): void {
    this.novoCadeira = new CadeiraModel();
    if(!this.data['banco'])
      this.banco = new BancoModel();
    else
      this.banco = new BancoModel(this.data['banco']);
  }

  async salvar(){
    try{
      this.banco = await this._bancoService.save(this.banco);
      this._toastr.success(`Banco incluído com sucesso`);
      this._dialogRef.close(this.banco);
    }
    catch(error){
      console.log(error)
      this._toastr.error(`${error.response.data.message}`);
    }
  }

  async adicionarCadeira(){
    this.novoCadeira = await this._cadeiraService.save(this.novoCadeira);
    this.banco.cadeiras.push(this.novoCadeira);
    await this._bancoService.addCadeira(new BancoModel(this.banco), this.novoCadeira);
    this.novoCadeira = new CadeiraModel();
  }

  async removerCadeira(id:number, index:number){
    await this._cadeiraService.remove(id);
    this.banco.cadeiras.splice(index);
  }

  cancel(): void {
    this._dialogRef.close();
  }
}
