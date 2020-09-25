import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NovaListaComponent } from 'src/app/components/modals/nova-lista/nova-lista.component';
import { ListaModel } from 'src/app/models/lista.model';
import { ListaProvider } from 'src/app/providers/lista.provider';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss']
})
export class ButtonAddComponent implements OnInit {

  listas:ListaModel[];

  constructor(
    public _listaProvider: ListaProvider,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addLista($event){
    const dialogRef = this.dialog.open(NovaListaComponent, {
      width: '440px',
      height: '280px',
      panelClass: 'app-modal'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this._listaProvider.listas.push(result);
    });
    
  }

}
