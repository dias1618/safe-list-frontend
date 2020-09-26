import { ListaModel } from 'src/app/models/lista.model';
import { ListaController } from 'src/app/controllers/lista.controller';
import { DateTools } from 'src/shared/date.tools';
import { ParticipanteModel } from '../models/participante.model';

export class ListaService{

    constructor(private _listaController:ListaController){}

    async save(lista:ListaModel){
        if(lista.id == undefined || lista.id == 0)
            return await this._listaController.insert(lista);
        else
            return await this._listaController.update(lista);
    }

    async get(id:number):Promise<ListaModel>{
        return this._listaController.get(id);
    }

    async getAll(){
        let listas = await this._listaController.getAll();
        let listasModel:ListaModel[] = [];
        for(let lista of listas){
            let listaModel = new ListaModel({
                id: lista['id'],
                data: new Date(lista['data']),
                horaInicial: DateTools.timeToString(new Date(lista['horaInicial'])),
                horaFinal: DateTools.timeToString(new Date(lista['horaFinal'])),
            });
            listasModel.push(listaModel);
        }
        return listasModel;
    }

    async addParticipante(lista:ListaModel, participante:ParticipanteModel){
        this._listaController.addParticipante(lista, participante);
    }
}