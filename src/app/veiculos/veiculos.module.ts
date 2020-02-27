import { HttpClientModule } from '@angular/common/http';
import { VeiculoServicoService } from './veiculo-servico.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculosComponent } from './veiculos.component';
import { AddVeiculosComponent } from './add-veiculos/add-veiculos.component';
import { DelVeiculosComponent } from './del-veiculos/del-veiculos.component';

// material design
import {MatInputModule, MatFormFieldModule, MatTableModule, MatSelectModule, MAT_LABEL_GLOBAL_OPTIONS, MatSortModule, MatPaginatorModule, MatPaginatorIntl} from '@angular/material';



@NgModule({
  declarations: [
    VeiculosComponent,
    AddVeiculosComponent,
    DelVeiculosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    VeiculosRoutingModule,

    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'auto'}},
    { provide: MatPaginatorIntl, useClass: VeiculosComponent},
    VeiculoServicoService
  ]
})
export class VeiculosModule { }
