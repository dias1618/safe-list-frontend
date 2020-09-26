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
}