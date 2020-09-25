import { ListaModel } from 'src/app/models/lista.model';
import axios from "axios";
import { environment } from 'src/environments/environment';

export class ListaController{


    async insert(lista:ListaModel){
        await axios.post<any>(`${environment.baseUrl}/listas`, lista.toJson(), environment.axiosConfig)
            .then(value => lista = value.data)
    }

    async update(lista:ListaModel){
        await axios.put<any>(`${environment.baseUrl}/listas`, lista.toJson(), environment.axiosConfig)
            .then(value => lista = value.data)
    }

    async getAll(){
        let listas:[];
        await axios.get<any>(`${environment.baseUrl}/listas`, environment.axiosConfig)
            .then(value => listas = value.data);
        return listas;
    }
}