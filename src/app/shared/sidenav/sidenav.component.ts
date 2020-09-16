import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  callPrincipal($event){
    alert('principal')
  }

  callUsuarios($event){
    alert('usuarios')
  }

  callConfiguracoes($event){
    alert('configuracoes')
  }

}
