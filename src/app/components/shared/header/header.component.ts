import { Component, OnInit, Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/models/usuario.model';
import { SessionService } from 'src/app/services/session.service';

@Injectable()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  usuario:Usuario;
  
  constructor(
    private _authService: AuthService,
    private _sessionService: SessionService
  ) { }

  ngOnInit() {
    this.usuario = this._sessionService.usuario;
  }

  onLogout(){
    this._authService.deslogar();                      // {3}
  }

}
