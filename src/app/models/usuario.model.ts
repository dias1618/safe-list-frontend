export class Usuario{

    id:number;
    nome:string;
    login:string;
    senha:string;
    email:string;

    constructor(data:{id:number, nome:string, login:string, senha:string, email:string}){
        this.id = data && data.id || 0;
        this.nome = data && data.nome || "";
        this.login = data && data.login || "";
        this.senha = data && data.senha || "";
        this.email = data && data.email || "";
    }

    public toString = () : string => {
        return `Usuario (${this.id}, ${this.nome}, ${this.login}, ${this.senha}, ${this.email})`;
    }

}