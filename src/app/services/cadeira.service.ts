import { CadeiraModel } from 'src/app/models/cadeira.model';
import { CadeiraController } from 'src/app/controllers/cadeira.controller';
export class CadeiraService{

    constructor(private _cadeiraController:CadeiraController){}

    async save(cadeira:CadeiraModel):Promise<CadeiraModel>{
        if(cadeira.id == undefined || cadeira.id == 0)
            return await this._cadeiraController.insert(cadeira);
        else
            return await this._cadeiraController.update(cadeira);
    }

    async get(id:number):Promise<CadeiraModel>{
        return this._cadeiraController.get(id);
    }

    async getAll(){
        let cadeiras = await this._cadeiraController.getAll();
        let cadeirasModel:CadeiraModel[] = [];
        for(let cadeira of cadeiras){
            let cadeiraModel = new CadeiraModel(cadeira);
            cadeirasModel.push(cadeiraModel);
        }
        return cadeirasModel;
    }

    async remove(id:number):Promise<CadeiraModel>{
        return this._cadeiraController.remove(id);
    }
}