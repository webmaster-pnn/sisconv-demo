import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartoesComponent } from './cartoes.component';


const routes: Routes = [
  {path: 'cartoes', component: CartoesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartoesRoutingModule { }
