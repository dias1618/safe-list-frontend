import { BancoModel } from '../models/banco.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BancoProvider{
    public bancos:BancoModel[];
    private dataSource = new BehaviorSubject(new BancoModel());
    public bancoAtual = this.dataSource.asObservable();

    constructor(){
        this.bancos = [];
    }

    updateBanco(banco:BancoModel){
        this.dataSource.next(banco);
    }
}