import { LoginDto } from 'src/dtos/login.dto';
import { AuthController } from 'src/controllers/auth.controller';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/models/usuario.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthService{

    constructor(
        private _authController:AuthController,
        private _route:Router
    ){}

    async autenticar(username:string, password:string){
        let loginDto:LoginDto = new LoginDto({login: username, senha: password});
        let usuario:Usuario = await this._authController.auth(loginDto);
        return usuario;
    }

    deslogar() {
        this._route.navigate(['/login']);
    }

}