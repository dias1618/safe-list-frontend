import { BancoModel } from 'src/app/models/banco.model';
import { BancoController } from 'src/app/controllers/banco.controller';
import { CadeiraModel } from '../models/cadeira.model';
export class BancoService{

    constructor(private _bancoController:BancoController){}

    async save(banco:BancoModel):Promise<BancoModel>{
        if(banco.id == undefined || banco.id == 0)
            return await this._bancoController.insert(banco);
        else
            return await this._bancoController.update(banco);
    }

    async get(id:number):Promise<BancoModel>{
        return this._bancoController.get(id);
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
        this._bancoController.addCadeira(banco, cadeira);
    }
}