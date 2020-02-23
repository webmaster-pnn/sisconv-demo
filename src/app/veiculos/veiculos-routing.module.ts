import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeiculosComponent } from './veiculos.component';


const routes: Routes = [
  {path: 'veiculos', component: VeiculosComponent, children: [
    {path: 'pesquisar', component: VeiculosComponent }

  ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }
