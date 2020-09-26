import { ParticipanteModel } from 'src/app/models/participante.model';
import axios from "axios";
import { environment } from 'src/environments/environment';

export class ParticipanteController{


    async insert(participante:ParticipanteModel){
        return await axios.post<ParticipanteModel>(`${environment.baseUrl}/participantes`, participante, environment.axiosConfig)
            .then(value => participante = value.data)
    }

    async update(participante:ParticipanteModel){
        return await axios.put<ParticipanteModel>(`${environment.baseUrl}/participantes`, participante, environment.axiosConfig)
            .then(value => participante = value.data)
    }

    async get(id:number):Promise<ParticipanteModel>{
        let participante:ParticipanteModel;
        await axios.get<any>(`${environment.baseUrl}/participantes/${id}`, environment.axiosConfig)
            .then(value => participante = value.data);
        return participante;
    }

    async getAll():Promise<ParticipanteModel[]>{
        let participantes:[];
        await axios.get<any>(`${environment.baseUrl}/participantes`, environment.axiosConfig)
            .then(value => participantes = value.data);
        return participantes;
    }
}