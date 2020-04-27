import { ListarProprietariosComponent } from './listar-proprietarios/listar-proprietarios.component';
import { AddProprietariosComponent } from './add-proprietarios/add-proprietarios.component';
import { ProprietariosComponent } from './proprietarios.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ProprietariosResolverGuard } from '../guards/proprietarios-resolver.guard';


const routes: Routes = [
  {
    path: '',
    component: ProprietariosComponent,
    children: [
      {
        path: 'pesquisar', component: ListarProprietariosComponent,
        resolve: {
          proprietarios: ProprietariosResolverGuard
        }
      },
      {
        path: 'adicionar', component: AddProprietariosComponent,
        resolve: {
          proprietarios: ProprietariosResolverGuard
        }
      },
      {
        path: 'editar/:id', component: AddProprietariosComponent,
        resolve: {
          proprietarios: ProprietariosResolverGuard
        }
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProprietariosRoutingModule { }
