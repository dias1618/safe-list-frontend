import { ValidationError } from '../errors/validation.error';

export interface Validator{
    validate(data:any);
}