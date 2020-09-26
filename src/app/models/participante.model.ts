import { ListaModel } from './lista.model';

export class ParticipanteModel{

    id:number;
    nome:string;
    telefone:string;
    dependentes:ParticipanteModel[];

    constructor(data?:{id?:number, nome?:string, telefone?:string, dependentes?:ParticipanteModel[]}){
        this.id = data && data.id || 0;
        this.nome = data && data.nome || "";
        this.telefone = data && data.telefone || "";
        this.dependentes = data && data.dependentes || [];
    }

    public toString = () : string => {
        return `Participante (${this.id}, ${this.nome}, ${this.telefone})`;
    }

    public toJson(){
        return JSON.parse(`{
            "id": ${this.id},
            "nome": "${this.nome}",
            "telefone": "${this.telefone}",
            "dependentes": "${this.dependentes}"
        }`);
    }
}