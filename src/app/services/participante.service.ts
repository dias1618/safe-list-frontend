import { ParticipanteModel } from 'src/app/models/participante.model';
import { ParticipanteController } from 'src/app/controllers/participante.controller';
import { DateTools } from 'src/shared/date.tools';

export class ParticipanteService{

    constructor(private _participanteController:ParticipanteController){}

    async save(participante:ParticipanteModel):Promise<ParticipanteModel>{
        if(participante.id == undefined || participante.id == 0)
            return await this._participanteController.insert(participante);
        else
            return await this._participanteController.update(participante);
    }

    async get(id:number):Promise<ParticipanteModel>{
        return this._participanteController.get(id);
    }

    async getAll(){
        return await this._participanteController.getAll();
    }
}