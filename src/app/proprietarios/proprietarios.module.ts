import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// material imports
import {MatInputModule, MatFormFieldModule, MatTableModule, MatSelectModule, MAT_LABEL_GLOBAL_OPTIONS, MatSortModule, MatPaginatorModule, MatPaginatorIntl} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// components imports
import { ProprietariosComponent } from './proprietarios.component';
import { ProprietariosRoutingModule } from './proprietarios-routing.module';
import { AddProprietariosComponent } from './add-proprietarios/add-proprietarios.component';
import { DelProprietariosComponent } from './del-proprietarios/del-proprietarios.component';
import { EditProprietariosComponent } from './edit-proprietarios/edit-proprietarios.component';


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

    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'auto'}},
    { provide: MatPaginatorIntl, useClass: ProprietariosComponent}
  ]
})
export class ProprietariosModule {  }
