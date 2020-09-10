import { LoginDto } from 'src/dtos/login.dto';
import { AuthController } from 'src/controllers/auth.controller';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{

    constructor(
        private _authController:AuthController
    ){}

    async autenticar(username:string, password:string){
        let loginDto:LoginDto = new LoginDto({login: username, senha: password});
        return await this._authController.auth(loginDto);
    }

}