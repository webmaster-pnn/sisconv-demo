import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeiculosComponent } from './veiculos.component';
import { AddVeiculosComponent } from './add-veiculos/add-veiculos.component';
import { DelVeiculosComponent } from './del-veiculos/del-veiculos.component';
import { EditVeiculosComponent } from './edit-veiculos/edit-veiculos.component';


const routes: Routes = [
  {path: 'veiculos/pesquisar', component: VeiculosComponent },
  {path: 'veiculos/adicionar', component: AddVeiculosComponent },
  {path: 'veiculos/editar/:id', component: EditVeiculosComponent },
  {path: 'veiculos/remover', component: DelVeiculosComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }
