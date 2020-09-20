export class ParticipanteModel{

    id:number;
    nome:string;
    telefone:string;
    
    constructor(data:{id:number, nome:string, telefone:string}){
        this.id = data && data.id || 0;
        this.nome = data && data.nome || "";
        this.telefone = data && data.telefone || "";
    }

    public toString = () : string => {
        return `Participante (${this.id}, ${this.nome}, ${this.telefone})`;
    }

}