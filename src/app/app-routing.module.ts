import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/guards/auth-guard';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path: 'home', component: NavBarComponent,
    loadChildren: () => import('./components/home/home.module').then(m=>m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m=>m.LoginModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'listas',component: NavBarComponent,
    loadChildren: () => import('./components/lista/lista.module').then(m=>m.ListaModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
