import { ListaModel } from '../models/lista.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ListaProvider{
    public listas:ListaModel[];
    private dataSource = new BehaviorSubject(new ListaModel());
    public listaAtual = this.dataSource.asObservable();

    constructor(){
        this.listas = [];
    }

    updateLista(lista:ListaModel){
        this.dataSource.next(lista);
    }

    somatorioParticipantes(lista:ListaModel):number{
        let quantidadeTotal:number = lista.participantes.length;
        for(let participante of lista.participantes){
            quantidadeTotal += participante.dependentes.length;
        }
        return quantidadeTotal;
    }
}