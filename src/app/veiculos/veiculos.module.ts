import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculosComponent } from './veiculos.component';
import { AddVeiculosComponent } from './add-veiculos/add-veiculos.component';
import { DelVeiculosComponent } from './del-veiculos/del-veiculos.component';


@NgModule({
  declarations: [
    VeiculosComponent,
    AddVeiculosComponent,
    DelVeiculosComponent
  ],
  imports: [
    CommonModule,
    VeiculosRoutingModule
  ]
})
export class VeiculosModule { }
