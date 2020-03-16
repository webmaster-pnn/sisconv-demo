import { FormsModule, NgControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule, IConfig } from 'ngx-mask';


// material imports
import {MatInputModule, MatFormFieldModule, MatTableModule, MatSelectModule, MAT_LABEL_GLOBAL_OPTIONS, MatSortModule, MatPaginatorModule, MatPaginatorIntl, MatIconModule, MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// components imports
import { ProprietariosComponent } from './proprietarios.component';
import { ProprietariosRoutingModule } from './proprietarios-routing.module';
import { AddProprietariosComponent } from './add-proprietarios/add-proprietarios.component';
import { DelProprietariosComponent } from './del-proprietarios/del-proprietarios.component';
import { EditProprietariosComponent } from './edit-proprietarios/edit-proprietarios.component';
import { VeiculoServicoService } from '../veiculos/veiculo-servico.service';

@NgModule({
  declarations: [
    ProprietariosComponent,
    AddProprietariosComponent,
    DelProprietariosComponent,
    EditProprietariosComponent

    
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ProprietariosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'auto'}},
    { provide: MatPaginatorIntl, useClass: ProprietariosComponent},
  
    VeiculoServicoService,
    
  ]
})
export class ProprietariosModule {  }
