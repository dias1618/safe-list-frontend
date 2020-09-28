import { ListaModel } from 'src/app/models/lista.model';
import { ListaController } from 'src/app/controllers/lista.controller';
import { ParticipanteModel } from '../models/participante.model';

export class ListaService{

    constructor(private _listaController:ListaController){}

    async save(lista:ListaModel):Promise<ListaModel>{
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
                horaInicial: new Date(lista['horaInicial']).toISOString(),
                horaFinal: new Date(lista['horaFinal']).toISOString(),
            });
            listasModel.push(listaModel);
        }
        return listasModel;
    }

    async addParticipante(lista:ListaModel, participante:ParticipanteModel){
        this._listaController.addParticipante(lista, participante);
    }
}