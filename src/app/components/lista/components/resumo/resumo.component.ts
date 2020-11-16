import { Component, OnInit, Input } from '@angular/core';
import { ListaModel } from 'src/app/models/lista.model';
import { ListaProvider } from 'src/app/providers/lista.provider';
import { Configuracoes } from 'src/app/providers/configuracoes.provider';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.scss']
})
export class ResumoComponent implements OnInit {
  
  constructor(
    public listaProvider:ListaProvider,
    public configuracoes:Configuracoes
  ) { }

  ngOnInit(): void {
  }

  getResumo(){
    let resumo = '';
    this.listaProvider.listaAtual.subscribe(lista => {
      resumo = `Participantes cadastrados: ${this.listaProvider.somatorioParticipantes(lista)}/${this.configuracoes.maxParticipantes}`;
    });
    return resumo;
  }
}
