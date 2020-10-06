import { CadeiraModel } from 'src/app/models/cadeira.model';
import axios from "axios";
import { environment } from 'src/environments/environment';

export class CadeiraController{

    async insert(cadeira:CadeiraModel):Promise<CadeiraModel>{
        return await axios.post<any>(`${environment.baseUrl}/cadeiras`, cadeira, environment.axiosConfig)
            .then(value => cadeira = value.data)
    }

    async update(cadeira:CadeiraModel):Promise<CadeiraModel>{
        return await axios.put<any>(`${environment.baseUrl}/cadeiras`, cadeira, environment.axiosConfig)
            .then(value => cadeira = value.data)
    }

    async get(id:number):Promise<CadeiraModel>{
        let cadeira:CadeiraModel;
        await axios.get<any>(`${environment.baseUrl}/cadeiras/${id}`, environment.axiosConfig)
            .then(value => cadeira = value.data);
        return cadeira;
    }

    async getAll():Promise<CadeiraModel[]>{
        let cadeiras:[];
        await axios.get<any>(`${environment.baseUrl}/cadeiras`, environment.axiosConfig)
            .then(value => cadeiras = value.data);
        return cadeiras;
    }

    async remove(id:number){
        let cadeiraRemovido:CadeiraModel;
        await axios.delete<CadeiraModel>(`${environment.baseUrl}/cadeiras/${id}`, environment.axiosConfig)
            .then(value => cadeiraRemovido = value.data);
        return cadeiraRemovido;
    }

}