import { ProprietariosComponent } from './proprietarios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProprietariosRoutingModule } from './proprietarios-routing.module';
import { AddProprietariosComponent } from './add-proprietarios/add-proprietarios.component';
import { DelProprietariosComponent } from './del-proprietarios/del-proprietarios.component';


@NgModule({
  declarations: [
    ProprietariosComponent,
    AddProprietariosComponent,
    DelProprietariosComponent
  ],
  imports: [
    CommonModule,
    ProprietariosRoutingModule
  ]
})
export class ProprietariosModule { }
