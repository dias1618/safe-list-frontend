import { Component, OnInit } from '@angular/core';
import { BancoModel } from 'src/app/models/banco.model';
import { BancoProvider } from 'src/app/providers/banco.provider';
import { MatDialog } from '@angular/material/dialog';
import { NovoBancoComponent } from 'src/app/components/modals/novo-banco/novo-banco.component';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss']
})
export class ButtonAddComponent implements OnInit {

  bancos:BancoModel[];

  constructor(
    public _bancoProvider: BancoProvider,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addBanco($event){
    const dialogRef = this.dialog.open(NovoBancoComponent, {
      width: '440px',
      height: '77vh',
      panelClass: 'app-modal',
      data: {banco: new BancoModel()}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this._bancoProvider.bancos.push(result);
    });
    
  }

}
