import { ParticipanteModel } from 'src/app/models/participante.model';
import axios from "axios";
import { environment } from 'src/environments/environment';

export class ParticipanteController{


    async insert(participante:ParticipanteModel){
        await axios.post<ParticipanteModel>(`${environment.baseUrl}/participantes`, participante, environment.axiosConfig)
            .then(value => participante = value.data)
        return participante;
    }

    async update(participante:ParticipanteModel){
        await axios.put<ParticipanteModel>(`${environment.baseUrl}/participantes`, participante, environment.axiosConfig)
            .then(value => participante = value.data);
        return participante;
    }

    async addDependente(participante:ParticipanteModel, dependente:ParticipanteModel){
        await axios.put<any>(`${environment.baseUrl}/participantes/dependente`, {participante:participante, dependente:dependente}, environment.axiosConfig);
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

    async remove(id:number){
        let participanteRemovido:ParticipanteModel;
        await axios.delete<ParticipanteModel>(`${environment.baseUrl}/participantes/${id}`, environment.axiosConfig)
            .then(value => participanteRemovido = value.data);
        return participanteRemovido;
    }

}