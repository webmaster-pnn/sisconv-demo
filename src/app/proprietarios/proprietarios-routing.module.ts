import { EditProprietariosComponent } from './edit-proprietarios/edit-proprietarios.component';
import { DelProprietariosComponent } from './del-proprietarios/del-proprietarios.component';
import { AddProprietariosComponent } from './add-proprietarios/add-proprietarios.component';
import { ProprietariosComponent } from './proprietarios.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'proprietarios/pesquisar', component: ProprietariosComponent  },
  {path: 'proprietarios/adicionar', component: AddProprietariosComponent},
  { path: 'proprietarios/editar/:id', component: EditProprietariosComponent },
  {path: 'proprietarios/remover', component: DelProprietariosComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProprietariosRoutingModule { }
