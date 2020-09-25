import { ListaModel } from '../models/lista.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ListaProvider{
    public listas:ListaModel[]

    constructor(){
        this.listas = [];
    }
}