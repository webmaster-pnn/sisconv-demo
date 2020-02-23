import { Proprietarios } from './../model/proprietarios';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-proprietarios',
  templateUrl: './proprietarios.component.html',
  styleUrls: ['./proprietarios.component.css']
})
export class ProprietariosComponent extends MatPaginatorIntl implements OnInit  {
  proprietario: Proprietarios[] = [
    { "id": 1,"grad": "MN", "nome": "Carlos Henrique Pereira Machado Júnior", "nip": "16115597", "setor": "CPD", "cnh":"2251522-55", "editar": ""},
    { "id": 2,"grad": "CB", "nome": "Carlos Henrique Pereira Machado Júnior", "nip": "16115597", "setor": "CPD", "cnh":"2251522-55", "editar": ""},
    { "id": 3,"grad": "MN", "nome": "Carlos Henrique Pereira Machado Júnior", "nip": "16115597", "setor": "CPD", "cnh":"2251522-55", "editar": ""}
    
  ];
  tabela_vazia: boolean = false;
  displayedColumns: string[] = ['grad','nome', 'nip', 'setor','cnh', 'editar'];
  dataSource = new MatTableDataSource(this.proprietario);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

  constructor() { 
    super();
    // paginator tradução
    this.itemsPerPageLabel = 'Itens por pagina';
    this.getRangeLabel = function (page, pageSize, length) {
      if (length === 0 || pageSize === 0) {
        return '0 de ' + length;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      // If the start index exceeds the list length, do not try and fix the end index to the end.
      const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;
      return startIndex + 1 + ' - ' + endIndex + ' de ' + length;
    };
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if(this.proprietario.length == 0){
      this.tabela_vazia = true;
    }

  }

}
