import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/guards/auth-guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m=>m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m=>m.LoginModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
