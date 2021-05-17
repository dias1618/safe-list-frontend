import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import { ListaProvider } from '../providers/lista.provider';
import { Injectable } from '@angular/core';
import { ListaModel } from '../models/lista.model';
import { ParticipanteModel } from '../models/participante.model';
const download = require('downloadjs');
import { format, compareAsc } from 'date-fns'
import { GenerateReport } from "../tools/generate-report";

@Injectable()
export class ListaParticipantesPdf{

  lista:ListaModel;
  
  constructor(
    private listaProvider:ListaProvider,
    private generateReport:GenerateReport
  ){}

  async generate(){
    
    await this.generateReport.init();

    this.listaProvider.listaAtual.subscribe(lista => {
      this.lista = lista;
    });

    
    this.generateReport.addTitle(this.lista.nomeCapela, {fontSize: 16});
    this.generateReport.addSubtitle(`Lista de participantes do dia ${format(new Date(this.lista.data), 'dd/MM/yyyy')} (${format(new Date(this.lista.horaInicial), 'HH:mm')} - ${format(new Date(this.lista.horaFinal), 'HH:mm')})`, {fontSize: 14});
    this.generateReport.addRow([
      {text: `Posição`, fontSize: 14, margin: 20},
      {text: `Presença`, fontSize: 14, margin: 80},
      {text: `Participante`, fontSize: 14, margin: 140},
      {text: `Telefone`, fontSize: 14, margin: 480},
      
    ]);

    let quantParticipantes = 1;
    for(let participante of this.lista.participantes){
      this.generateReport.addRow([
        {text: `${((quantParticipantes++))}`, fontSize: 14, margin: 20},
        {text: `${participante.nome}${participante.telefone}`, checkbox: true, margin: 80},
        {text: `${participante.nome}`, fontSize: 14, margin: 140},
        {text: `${this.maskTelefone(participante.telefone)}`, fontSize: 14, margin: 480}
      ]);
      for(let dependente of participante.dependentes){
        this.generateReport.addRow([
          {text: `${((quantParticipantes++))}`, fontSize: 14, margin: 20},
          {text: `${participante.nome}${participante.telefone}${dependente.nome}`, checkbox: true, margin: 80},
          {text: `${dependente.nome}`, fontSize: 14, margin: 180}
        ]);
      }
    }
    
    this.generateReport.downloadFile('lista-missa');
  }

  private maskTelefone(telefone:string):string{
    return `(${telefone.substring(0, 2)}) ${telefone.substring(2)}`;
  }

}

