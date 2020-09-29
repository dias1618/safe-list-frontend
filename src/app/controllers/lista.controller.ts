import { ListaModel } from 'src/app/models/lista.model';
import axios from "axios";
import { environment } from 'src/environments/environment';
import { ParticipanteModel } from '../models/participante.model';

export class ListaController{


    async insert(lista:ListaModel):Promise<ListaModel>{
        return await axios.post<any>(`${environment.baseUrl}/listas`, lista, environment.axiosConfig)
            .then(value => lista = value.data)
    }

    async update(lista:ListaModel):Promise<ListaModel>{
        return await axios.put<any>(`${environment.baseUrl}/listas`, lista, environment.axiosConfig)
            .then(value => lista = value.data)
    }

    async addParticipante(lista:ListaModel, participante:ParticipanteModel){
        await axios.put<any>(`${environment.baseUrl}/listas/participante`, {lista: lista, participante:participante}, environment.axiosConfig);
    }

    async get(id:number):Promise<ListaModel>{
        let lista:ListaModel;
        await axios.get<any>(`${environment.baseUrl}/listas/${id}`, environment.axiosConfig)
            .then(value => lista = value.data);
        return lista;
    }

    async getAll():Promise<ListaModel[]>{
        let listas:[];
        await axios.get<any>(`${environment.baseUrl}/listas`, environment.axiosConfig)
            .then(value => listas = value.data);
        return listas;
    }
}