import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista.component';
import { AuthGuard } from 'src/guards/auth-guard';

const routes: Routes = [
  {path: ':id', component: ListaComponent},
  {
    path: ':id/participantes',
    loadChildren: () => import('../participantes/participantes.module').then(m=>m.ParticipantesModule),
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaRoutingModule { }
