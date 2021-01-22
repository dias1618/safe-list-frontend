import { ListaModel } from './lista.model';
import { CadeiraModel } from './cadeira.model';

export class ParticipanteModel{

    id:number;
    nome:string;
    telefone:string;
    fixo:boolean;
    dependentes:ParticipanteModel[] = [];
    cadeiras:CadeiraModel[] = [];
    responsavel:ParticipanteModel;

    constructor(data?:{id?:number, nome?:string, telefone?:string, fixo?:boolean, dependentes?:ParticipanteModel[], cadeiras?:CadeiraModel[], responsavel?:ParticipanteModel}){
        this.id = data && data.id || 0;
        this.nome = data && data.nome || "";
        this.telefone = data && data.telefone || "";
        this.fixo = data && data.fixo || false;
        this.dependentes = data && data.dependentes || [];
        this.cadeiras = data && data.cadeiras || [];
        this.responsavel = data && data.responsavel || null;
    }

    public toString = () : string => {
        return `Participante (${this.id}, ${this.nome}, ${this.telefone}, ${this.fixo})`;
    }

    public toJson(){
        return JSON.parse(`{
            "id": ${this.id},
            "nome": "${this.nome}",
            "telefone": "${this.telefone}",
            "fixo": "${this.fixo}",
            "dependentes": "${this.dependentes}",
            "cadeiras": "${this.cadeiras}"
        }`);
    }
}