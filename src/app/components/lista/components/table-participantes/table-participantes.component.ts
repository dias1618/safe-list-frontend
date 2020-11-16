import { Component, OnInit, ViewChild, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ParticipanteModel } from 'src/app/models/participante.model';
import { MatPaginator } from '@angular/material/paginator';
import { ListaModel } from 'src/app/models/lista.model';
import { ListaProvider } from 'src/app/providers/lista.provider';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { NovoParticipanteComponent } from 'src/app/components/modals/novo-participante/novo-participante.component';

@Component({
  selector: 'app-table-participantes',
  templateUrl: './table-participantes.component.html',
  styleUrls: ['./table-participantes.component.scss']
})
export class TableParticipantesComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'dependentes', 'telefone'];
  dataSource:MatTableDataSource<ParticipanteModel>;
  initialSelection = [];
  allowMultiSelect = true;
  selection:SelectionModel<ListaModel>;
  lista:ListaModel;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public listaProvider:ListaProvider,
    public dialog: MatDialog,
  ){}

  async ngOnInit(){
    this.selection = new SelectionModel<ListaModel>(this.allowMultiSelect, this.initialSelection);
    this.listaProvider.listaAtual.subscribe(lista => {
      this.lista = lista;
      this.dataSource = new MatTableDataSource<ParticipanteModel>(this.lista.participantes);
      this.dataSource.paginator = this.paginator;
    });
    this.selectedRow();
    
  }

  selectedRow(){
    this.selection.changed.subscribe((a) =>{
        if (a.added[0]){
          this.callParticipante(new ParticipanteModel(a.added[0]));
        }
    });
  }

  callParticipante(participante:ParticipanteModel){
    const dialogRef = this.dialog.open(NovoParticipanteComponent, {
      width: '80vw',
      height: '85vh',
      panelClass: 'app-modal',
      data: {participante: participante}
    });

    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        let participanteSelecionado = new ParticipanteModel(result);
        for(let x = 0; x < this.lista.participantes.length; x++){
          if(participanteSelecionado.id == this.lista.participantes[x].id){
            this.lista.participantes[x] = participanteSelecionado;
          }
        }
        this.listaProvider.updateLista(this.lista);
      }
      this.selection.clear();
    });
  }
}
