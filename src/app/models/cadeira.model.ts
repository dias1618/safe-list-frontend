export class CadeiraModel{
    id:number;
    numero:number;

    constructor(data?:{id?:number, numero?:number}){
        this.id = data && data.id || 0;
        this.numero = data && data.numero || 0;
    }
}