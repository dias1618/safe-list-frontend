export class Configuracoes{
    private _maxParticipantes:number;

    constructor(){
        this._maxParticipantes = 400;
    }

    get maxParticipantes():number{
        return this._maxParticipantes;
    }
}