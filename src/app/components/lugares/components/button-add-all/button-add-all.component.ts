import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddVariosLugaresComponent } from 'src/app/components/modals/add-varios-lugares/add-varios-lugares.component';
import { BancoProvider } from 'src/app/providers/banco.provider';
import { BancoService } from 'src/app/services/banco.service';

@Component({
  selector: 'app-button-add-all',
  templateUrl: './button-add-all.component.html',
  styleUrls: ['./button-add-all.component.scss']
})
export class ButtonAddAllComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private _bancoProvider:BancoProvider,
    private _bancoService:BancoService
  ) { }

  ngOnInit(): void {
  }

  addBancos($event){
    const dialogRef = this.dialog.open(AddVariosLugaresComponent, {
      width: '400px',
      height: '35vh',
      panelClass: 'app-modal',
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      this._bancoProvider.bancos = await this._bancoService.getAll();
    });
    
  }

}
