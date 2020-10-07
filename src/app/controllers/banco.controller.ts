import { BancoModel } from 'src/app/models/banco.model';
import axios from "axios";
import { environment } from 'src/environments/environment';
import { CadeiraModel } from '../models/cadeira.model';

export class BancoController{

    async saveMany(quantidade:number):Promise<void>{
        return await axios.post<any>(`${environment.baseUrl}/bancos/many`, {quantidade: quantidade}, environment.axiosConfig)
            .then(value => {})
    }

    async insert(banco:BancoModel):Promise<BancoModel>{
        return await axios.post<any>(`${environment.baseUrl}/bancos`, banco, environment.axiosConfig)
            .then(value => banco = value.data)
    }

    async update(banco:BancoModel):Promise<BancoModel>{
        return await axios.put<any>(`${environment.baseUrl}/bancos`, banco, environment.axiosConfig)
            .then(value => banco = value.data)
    }

    async get(id:number):Promise<BancoModel>{
        let banco:BancoModel;
        await axios.get<any>(`${environment.baseUrl}/bancos/${id}`, environment.axiosConfig)
            .then(value => banco = value.data);
        return banco;
    }

    async getAll():Promise<BancoModel[]>{
        let bancos:[];
        await axios.get<any>(`${environment.baseUrl}/bancos`, environment.axiosConfig)
            .then(value => bancos = value.data);
        return bancos;
    }

    async addCadeira(banco:BancoModel, cadeira:CadeiraModel){
        await axios.put<any>(`${environment.baseUrl}/bancos/cadeira`, {banco: banco, cadeira:cadeira}, environment.axiosConfig);
    }

}