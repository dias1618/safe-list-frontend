import { CadeiraModel } from './cadeira.model';

export class BancoModel{

    id:number;
    identificacao:string;
    maxCadeiras:number;
    situacao:number;
    cadeiras:CadeiraModel[];

    constructor(data?:{id?:number, identificacao?:string, maxCadeiras:number, situacao:number, cadeiras?:CadeiraModel[]}){
        this.id = data && data.id || 0;
        this.identificacao = data && data.identificacao || '';
        this.maxCadeiras = data && data.maxCadeiras || 0;
        this.situacao = data && data.situacao || 1;
        this.cadeiras = data && data.cadeiras || [];
    }


}