import { VeiculosPesquisarComponent } from './veiculos-pesquisar/veiculos-pesquisar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeiculosComponent } from './veiculos.component';


const routes: Routes = [
  {path: 'veiculos', component: VeiculosComponent, children: [
    {path: 'pesquisar', component: VeiculosPesquisarComponent }

  ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }
