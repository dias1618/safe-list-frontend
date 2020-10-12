export class CadeiraModel{
    id:number;
    identificacao:string;

    constructor(data?:{id?:number, identificacao?:string}){
        this.id = data && data.id || 0;
        this.identificacao = data && data.identificacao || '';
    }
}