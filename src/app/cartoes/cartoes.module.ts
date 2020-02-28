import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartoesRoutingModule } from './cartoes-routing.module';
import { CartoesComponent } from './cartoes.component';

import { MatTableModule, MatFormFieldModule, MatInputModule, MatSortModule, MatPaginatorModule, MatSelectModule } from '@angular/material';


@NgModule({
  declarations: [
    CartoesComponent
  ],
  imports: [
    CommonModule,
    CartoesRoutingModule,

    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule
  ]
})
export class CartoesModule { }
