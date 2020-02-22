import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculosComponent } from './veiculos.component';
import { VeiculosPesquisarComponent } from './veiculos-pesquisar/veiculos-pesquisar.component';


@NgModule({
  declarations: [
    VeiculosComponent,
    VeiculosPesquisarComponent
  ],
  imports: [
    CommonModule,
    VeiculosRoutingModule
  ]
})
export class VeiculosModule { }
