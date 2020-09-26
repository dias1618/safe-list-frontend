import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ParticipanteModel } from 'src/app/models/participante.model';
import { MatDialog } from '@angular/material/dialog';
import { NovoParticipanteComponent } from 'src/app/components/modals/novo-participante/novo-participante.component';
import { ListaModel } from 'src/app/models/lista.model';
import { ListaService } from 'src/app/services/lista.service';
import { ListaProvider } from 'src/app/providers/lista.provider';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss']
})
export class ButtonAddComponent implements OnInit {

  lista:ListaModel;

  constructor(
    public listaProvider:ListaProvider,
    public dialog: MatDialog,
    private _listaService:ListaService
  ) { }

  ngOnInit(): void {
    this.listaProvider.listaAtual.subscribe(lista =>{
      this.lista = lista;
    });
  }

  addParticipante($event){
    const dialogRef = this.dialog.open(NovoParticipanteComponent, {
      width: '50vw',
      height: '80vh',
      panelClass: 'app-modal',
      data: {participante: new ParticipanteModel()}
    });

    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        this.lista.participantes.push(new ParticipanteModel(result));
        await this._listaService.addParticipante(new ListaModel(this.lista), result);
        this.listaProvider.updateLista(this.lista);
      }
    });
    


  }
}
