import { BancoModel } from 'src/app/models/banco.model';
import { BancoController } from 'src/app/controllers/banco.controller';
import { CadeiraModel } from '../models/cadeira.model';
import { Injectable } from '@angular/core';

@Injectable()
export class BancoService{

    constructor(private _bancoController:BancoController){}

    async save(banco:BancoModel):Promise<BancoModel>{
        if(banco.id == undefined || banco.id == 0)
            return await this._bancoController.insert(banco);
        else
            return await this._bancoController.update(banco);
    }

    async saveMany(quantidade:number):Promise<void>{
        return await this._bancoController.saveMany(quantidade);
    }

    async get(id:number):Promise<BancoModel>{
        return await this._bancoController.get(id);
    }

    async getAll(){
        let bancos = await this._bancoController.getAll();
        let bancosModel:BancoModel[] = [];
        for(let banco of bancos){
            let bancoModel = new BancoModel(banco);
            bancosModel.push(bancoModel);
        }
        return bancosModel;
    }

    async addCadeira(banco:BancoModel, cadeira:CadeiraModel){
        await this._bancoController.addCadeira(banco, cadeira);
    }

    async remove(banco:BancoModel){
        await this._bancoController.remove(banco);
    }

    async removeAll(){
        await this._bancoController.removeAll();
    }
}