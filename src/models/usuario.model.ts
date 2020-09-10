export class Usuario{

    id:number;
    nome:string;
    login:string;
    senha:string;
    email:string;

    constructor(data:{id:number, nome:string, login:string, senha:string, email:string}){}

    public toString = () : string => {
        return `Usuario (${this.id}, ${this.nome}, ${this.login}, ${this.senha}, ${this.email})`;
    }

}