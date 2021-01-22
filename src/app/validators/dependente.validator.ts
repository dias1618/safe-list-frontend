import { Validator } from './validator.interface';
import { ParticipanteModel } from '../models/participante.model';
import { ValidationError } from '../errors/validation.error';

export class DependenteValidator implements Validator{
    validate(data:{dependente:ParticipanteModel, participante:ParticipanteModel}){
        this.validateNome(data.dependente);
        this.validateNomeRepetido(data.dependente, data.participante);
    }

    private validateNome(dependente:ParticipanteModel){
        if(!dependente.nome || dependente.nome == '')
            throw new ValidationError('Faltando nome do dependente');
    }

    private validateNomeRepetido(dependente:ParticipanteModel, participante:ParticipanteModel){
        for(let dependenteRegistrado of participante.dependentes)
            if(dependenteRegistrado.nome == dependente.nome)
                throw new ValidationError('Dependente já cadastrado');
    }

}