// angular imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// formularios imports
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';
// material imports
import {MatInputModule, MatFormFieldModule, MatTableModule, MatSelectModule, MAT_LABEL_GLOBAL_OPTIONS, MatSortModule, MatPaginatorModule, MatPaginatorIntl, MatIconModule, MatButtonModule} from '@angular/material';
// components imports
import { ProprietariosComponent } from './proprietarios.component';
import { ProprietariosRoutingModule } from './proprietarios-routing.module';
import { AddProprietariosComponent } from './add-proprietarios/add-proprietarios.component';
import { DelProprietariosComponent } from './del-proprietarios/del-proprietarios.component';
import { EditProprietariosComponent } from './edit-proprietarios/edit-proprietarios.component';
import { VeiculoServicoService } from '../veiculos/veiculo-servico.service';
import { ListarProprietariosComponent } from './listar-proprietarios/listar-proprietarios.component';

@NgModule({
  declarations: [
    ProprietariosComponent,
    AddProprietariosComponent,
    DelProprietariosComponent,
    EditProprietariosComponent,
    ListarProprietariosComponent  
  ],
  imports: [
    // angular 
    CommonModule,
    // roteamento
    ProprietariosRoutingModule,
    // formulario
    FormsModule,
    ReactiveFormsModule,

    NgxMaskModule.forRoot(),
    // material design
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule,
    MatButtonModule,
  ],
  providers: [
    {provide: 
      MAT_LABEL_GLOBAL_OPTIONS, 
      useValue: {float: 'auto'}
      
    },
    { provide: MatPaginatorIntl, useClass: ListarProprietariosComponent},
  
    VeiculoServicoService,
    
  ]
})
export class ProprietariosModule {  }
