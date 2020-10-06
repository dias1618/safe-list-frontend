import { CadeiraModel } from './cadeira.model';

export class BancoModel{

    id:number;
    numero:number;
    cadeiras:CadeiraModel[];

    constructor(data?:{id?:number, numero?:number, cadeiras?:CadeiraModel[]}){
        this.id = data && data.id || 0;
        this.numero = data && data.numero || 0;
        this.cadeiras = data && data.cadeiras || [];
    }


}