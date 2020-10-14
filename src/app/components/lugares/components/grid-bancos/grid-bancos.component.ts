import { Component, OnInit } from '@angular/core';
import { BancoModel } from 'src/app/models/banco.model';
import { Router } from '@angular/router';
import { BancoProvider } from 'src/app/providers/banco.provider';
import { BancoService } from 'src/app/services/banco.service';
import { MatDialog } from '@angular/material/dialog';
import { NovoBancoComponent } from 'src/app/components/modals/novo-banco/novo-banco.component';

@Component({
  selector: 'app-grid-bancos',
  templateUrl: './grid-bancos.component.html',
  styleUrls: ['./grid-bancos.component.scss']
})
export class GridBancosComponent implements OnInit {
  bancos:BancoModel[];

  constructor(
    public _bancoProvider:BancoProvider,
    private _bancoService:BancoService,
    public dialog: MatDialog
  ) { }

  async ngOnInit(){
    this._bancoProvider.bancos = await this._bancoService.getAll();
  }

  getNumero(banco:BancoModel){
    return `${banco.identificacao}`;
  }

  getCadeiras(banco:BancoModel){
    return `${banco.cadeiras.length}`;
  }

  navigate(banco:BancoModel){
    const dialogRef = this.dialog.open(NovoBancoComponent, {
      width: '440px',
      height: '77vh',
      panelClass: 'app-modal',
      data: {banco: banco}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result && !result.remove){
        for(let index=0; index<this._bancoProvider.bancos.length; index++){
          if(result.banco.id == this._bancoProvider.bancos[index].id){
            this._bancoProvider.bancos[index] = result.banco;
            break;
          }
        }
      }
      else if(result && result.remove){
        for(let index=0; index<this._bancoProvider.bancos.length; index++){
          if(result.banco.id == this._bancoProvider.bancos[index].id){
            this._bancoProvider.bancos.splice(index, 1);
            break;
          }
        }
        
      }
    });
  }

}
