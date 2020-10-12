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
      if(result)
        this._bancoProvider.bancos.push(result);
    });
  }

}
