import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartoesRoutingModule } from './cartoes-routing.module';
import { CartoesComponent } from './cartoes.component';


@NgModule({
  declarations: [
    CartoesComponent
  ],
  imports: [
    CommonModule,
    CartoesRoutingModule
  ]
})
export class CartoesModule { }
