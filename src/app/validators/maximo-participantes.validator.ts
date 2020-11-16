import { Validator } from './validator.interface';
import { ListaModel } from '../models/lista.model';
import { ParticipanteModel } from '../models/participante.model';
import { ListaProvider } from '../providers/lista.provider';
import { Configuracoes } from '../providers/configuracoes.provider';
import { ValidationError } from '../errors/validation.error';
import { Injectable } from '@angular/core';

@Injectable()
export class MaximoParticipantesValidator implements Validator{

    constructor(
        private listaProvider:ListaProvider,
        private configuracoes:Configuracoes
    ){}

    validate(data:{
        lista:ListaModel,
        participante:ParticipanteModel
    }){
        let soma:number = this.listaProvider.somatorioParticipantes(data.lista);
        if((soma+1) > this.configuracoes.maxParticipantes){
            throw new ValidationError('Máximo de participantes foi atingido');
        }
    }
}