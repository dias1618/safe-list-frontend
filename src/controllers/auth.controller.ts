import { Injectable } from '@angular/core';
import { LoginDto } from 'src/dtos/login.dto';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/models/usuario.model';
import axios from "axios";

@Injectable()
export class AuthController{

    async auth(loginDto:LoginDto){

        let usuario:Usuario;

        await axios.post<Usuario>('http://localhost:3000/auth', loginDto, { headers: {
            common: {
                "Cache-Control": "no-cache, no-store, must-revalidate",
                Pragma: "no-cache",
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        }})
        .then(value => usuario = value.data)
        
        return usuario;
    }
}