import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'side-nav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  callPrincipal($event){
    this.router.navigate(['/home']);
  }

  callUsuarios($event){
    alert('usuarios')
  }

  callConfiguracoes($event){
    alert('configuracoes')
  }

}
