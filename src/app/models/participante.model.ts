import { ListaModel } from './lista.model';
import { CadeiraModel } from './cadeira.model';

export class ParticipanteModel{

    id:number;
    nome:string;
    telefone:string;
    dependentes:ParticipanteModel[] = [];
    cadeiras:CadeiraModel[] = [];
    lista:ListaModel;

    constructor(data?:{id?:number, nome?:string, telefone?:string, dependentes?:ParticipanteModel[], cadeiras?:CadeiraModel[], lista?:ListaModel}){
        this.id = data && data.id || 0;
        this.nome = data && data.nome || "";
        this.telefone = data && data.telefone || "";
        this.dependentes = data && data.dependentes || [];
        this.cadeiras = data && data.cadeiras || [];
        this.lista = data && data.lista;
    }

    public toString = () : string => {
        return `Participante (${this.id}, ${this.nome}, ${this.telefone})`;
    }

    public toJson(){
        return JSON.parse(`{
            "id": ${this.id},
            "nome": "${this.nome}",
            "telefone": "${this.telefone}",
            "dependentes": "${this.dependentes}",
            "cadeiras": "${this.cadeiras}",
            "lista": "${this.lista}"
        }`);
    }
}