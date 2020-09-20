import { DateTools } from "../shared/date.tools";
import { ParticipanteModel } from './participante.model';

export class ListaModel{

    id:number;
    data:Date;
    horaInicial:string;
    horaFinal:string;
    participantes:ParticipanteModel[];

    constructor(data?:{id?:number, data?:Date, horaInicial?:string, horaFinal?:string, participantes?:ParticipanteModel[]}){
        this.id = data && data.id || 0;
        this.data = data && data.data;
        this.horaInicial = data && data.horaInicial;
        this.horaFinal = data && data.horaFinal;
        this.participantes = data && data.participantes || [];
    }

    public toJson(){
        return JSON.parse(`{
            "id": ${this.id},
            "data": "${this.data}",
            "horaInicial": "${DateTools.stringToTime(this.horaInicial)}",
            "horaFinal": "${DateTools.stringToTime(this.horaFinal)}"
        }`);
    }
}