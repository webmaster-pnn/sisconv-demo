import { ListarProprietariosComponent } from './listar-proprietarios/listar-proprietarios.component';
import { EditProprietariosComponent } from './edit-proprietarios/edit-proprietarios.component';
import { DelProprietariosComponent } from './del-proprietarios/del-proprietarios.component';
import { AddProprietariosComponent } from './add-proprietarios/add-proprietarios.component';
import { ProprietariosComponent } from './proprietarios.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { ProprietariosGuard } from './proprietarios.guard';
import { ProprietariosResolverGuard } from '../guards/proprietarios-resolver.guard';


const routes: Routes = [
  {
    path: '',
    component: ProprietariosComponent,
    children: [
      {
        path: '', component: ListarProprietariosComponent,
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
      },
      { path: 'remover', component: DelProprietariosComponent }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProprietariosRoutingModule { }
