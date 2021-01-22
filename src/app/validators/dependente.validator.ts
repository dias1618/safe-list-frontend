import { Validator } from './validator.interface';
import { ParticipanteModel } from '../models/participante.model';
import { ValidationError } from '../errors/validation.error';

export class DependenteValidator implements Validator{
    validate(data:{participante:ParticipanteModel}){
        this.validateNome(data.participante);
    }

    private validateNome(participante:ParticipanteModel){
        if(!participante.nome || participante.nome == '')
            throw new ValidationError('Faltando nome do dependente');
    }

}