import { VeiculoServicoService } from './../veiculos/veiculo-servico.service';
import { Component, OnInit, ViewChild } from '@angular/core';
// componente
import { Proprietarios } from './../model/proprietarios';
// material design
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Veiculos } from '../model/veiculos';

@Component({
  selector: 'app-proprietarios',
  templateUrl: './proprietarios.component.html',
  styleUrls: ['./proprietarios.component.css']
})
export class ProprietariosComponent extends MatPaginatorIntl implements OnInit  {
  v: VeiculoServicoService;
  // instancia de proprietario
  proprietario = [];
  // variaveis
  tabela_vazia: boolean = false;

  // colunas da tabela
  displayedColumns: string[] = ['grad','nome', 'nip', 'setor','cnh', 'editar'];
  // criando um novo objeto da tabela data source e passando o proprietario como parametro
  dataSource = new MatTableDataSource(this.proprietario);

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

  constructor(veiculo_servico: VeiculoServicoService) { 
    // herdando objetos da classe pai e utilizando para alterar elementos do paginator
    super();
    this.v = veiculo_servico;
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
    
    console.log(this.proprietario);
  }

  ngOnInit() {
    // atribuindo ao proprietario a paginação e os filtros.
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // verificando quando o objeto estiver vazio
    if(this.proprietario.length == 0){
      this.tabela_vazia = true;
    }
    

  }

}
