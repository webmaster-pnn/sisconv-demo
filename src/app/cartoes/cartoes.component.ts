import { Component, OnInit, ViewChild } from '@angular/core';

// material design

import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Veiculos } from '../model/veiculos';

@Component({
  selector: 'app-cartoes',
  templateUrl: './cartoes.component.html',
  styleUrls: ['./cartoes.component.css']
})
export class CartoesComponent extends MatPaginatorIntl implements OnInit {

  // instancia de veiculo
  veiculo = []


// variaveis
tabela_vazia: boolean = false;

// colunas da tabela
displayedColumns: string[] = ['cartao','nome', 'modelo', 'placa', 'editar'];
// criando um novo objeto da tabela data source e passando o proprietario como parametro
dataSource = new MatTableDataSource(this.veiculo);

// permite a atualização em tempo real da tabela.
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;

// função para aplicar o filtro na tabela
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }

}

constructor() { 
  // herdando objetos da classe pai e utilizando para alterar elementos do paginator
  super();
  
  // paginator tradução
  this.itemsPerPageLabel = 'Itens por pagina';
  this.getRangeLabel = function (page, pageSize, length) {
    if (length === 0 || pageSize === 0) {
      return '0 de ' + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    return startIndex + 1 + ' - ' + endIndex + ' de ' + length;
    
    
  };
}

ngOnInit() {
  // atribuindo ao proprietario a paginação e os filtros.
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  // verificando quando o objeto estiver vazio
  if(this.veiculo.length == 0){
    this.tabela_vazia = true;
  }
 
  console.log(this.veiculo);
}

}
