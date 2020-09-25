import { Injectable } from '@angular/core';
import { LoginDto } from 'src/app/dtos/login.dto';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/models/usuario.model';
import axios from "axios";

@Injectable()
export class AuthController{

    async auth(loginDto:LoginDto){
        let usuario:Usuario;
        await axios.post<Usuario>(`${environment.baseUrl}/auth`, loginDto, environment.axiosConfig)
            .then(value => usuario = value.data)
        return usuario;
    }
}