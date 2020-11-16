import { ParticipanteModel } from 'src/app/models/participante.model';
import { ParticipanteController } from 'src/app/controllers/participante.controller';
import { CadeiraModel } from '../models/cadeira.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ParticipanteService{

    constructor(private _participanteController:ParticipanteController){}

    async save(participante:ParticipanteModel):Promise<ParticipanteModel>{
        if(participante.id == undefined || participante.id == 0){
            return await this._participanteController.insert(participante);
        }
        else
            return await this._participanteController.update(participante);
    }

    async get(id:number):Promise<ParticipanteModel>{
        return this._participanteController.get(id);
    }

    async getAll(){
        return await this._participanteController.getAll();
    }

    async addDependente(participante:ParticipanteModel, dependente:ParticipanteModel){
        this._participanteController.addDependente(participante, dependente);
    }
    
    async addCadeira(participante:ParticipanteModel, cadeira:CadeiraModel){
        this._participanteController.addCadeira(participante, cadeira);
    }
    
    async remove(id:number):Promise<ParticipanteModel>{
        return this._participanteController.remove(id);
    }
}