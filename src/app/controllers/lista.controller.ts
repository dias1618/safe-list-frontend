import { ListaModel } from 'src/app/models/lista.model';
import axios from "axios";
import { environment } from 'src/environments/environment';
import { ParticipanteModel } from '../models/participante.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ListaController{


    async insert(lista:ListaModel):Promise<ListaModel>{
        return await axios.post<any>(`${environment.baseUrl}/listas`, lista, environment.axiosConfig)
            .then(value => lista = value.data)
    }

    async update(lista:ListaModel):Promise<ListaModel>{
        return await axios.put<any>(`${environment.baseUrl}/listas`, lista, environment.axiosConfig)
            .then(value => lista = value.data)
    }

    async delete(id:number):Promise<any>{
        return await axios.delete<any>(`${environment.baseUrl}/listas/${id}`, environment.axiosConfig);
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

    async getByDate(date:Date):Promise<ListaModel[]>{
        let listas:[];
        await axios.get<any>(`${environment.baseUrl}/listas?date=${date.toISOString()}`, environment.axiosConfig)
            .then(value => listas = value.data);
        return listas;
    }

    async getProximos():Promise<ListaModel[]>{
        let listas:[];
        await axios.get<any>(`${environment.baseUrl}/listas/proximos`, environment.axiosConfig)
            .then(value => listas = value.data);
        return listas;
    }

    async repetirLista(id:number):Promise<any>{
        return await axios.post<any>(`${environment.baseUrl}/listas/${id}`, environment.axiosConfig);
    }
}