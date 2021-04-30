export class Configuracoes{
    private _maxParticipantes:number;

    constructor(){
        this._maxParticipantes = 250;
    }

    get maxParticipantes():number{
        return this._maxParticipantes;
    }
}