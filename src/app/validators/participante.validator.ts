import { Validator } from './validator.interface';
import { ParticipanteModel } from '../models/participante.model';
import { ValidationError } from '../errors/validation.error';

export class ParticipanteValidator implements Validator{
    validate(data:{participante:ParticipanteModel}){
        this.validateNome(data.participante);
        this.validateTelefone(data.participante);
    }

    private validateNome(participante:ParticipanteModel){
        if(!participante.nome || participante.nome == '')
            throw new ValidationError('Faltando nome do participante');
    }

    private validateTelefone(participante:ParticipanteModel){
        if(!participante.telefone || participante.telefone == '')
            throw new ValidationError('Faltando telefone do participante');
        if(participante.telefone.length != 10 && participante.telefone.length != 11)
            throw new ValidationError('Telefone digitado de forma incompleta');
    }
}