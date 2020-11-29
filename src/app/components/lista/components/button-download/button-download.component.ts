import { Component, OnInit } from '@angular/core';
import { ListaParticipantesPdf } from 'src/app/pdfs/lista-participantes.pdf';

@Component({
  selector: 'button-download',
  templateUrl: './button-download.component.html',
  styleUrls: ['./button-download.component.scss']
})
export class ButtonDownloadComponent implements OnInit {

  constructor(private listaParticipantesPdf:ListaParticipantesPdf) { }

  ngOnInit(): void {
  }

  download($event){
    this.listaParticipantesPdf.generate();
  }

}
