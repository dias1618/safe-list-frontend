import { ParticipanteModel } from './participante.model';

export class ListaModel{

    id:number;
    data:Date;
    horaInicial:string;
    horaFinal:string;
    nomeCapela:string;
    participantes:ParticipanteModel[];

    constructor(data?:{id?:number, data?:Date, horaInicial?:string, horaFinal?:string, participantes?:ParticipanteModel[], nomeCapela?:string}){
        this.id = data && data.id || 0;
        this.data = data && data.data;
        this.horaInicial = data && data.horaInicial;
        this.horaFinal = data && data.horaFinal;
        this.nomeCapela = data && data.nomeCapela;
        this.participantes = data && data.participantes || [];
    }

}