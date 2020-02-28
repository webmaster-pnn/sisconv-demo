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
  veiculo: Array<Veiculos>  = [
    new Veiculos(1, "passat", "Volkswagen", 1999, "CXZ-2233", "05123468745", "prata", 'Carlos Henrique Pereira Machado Junior ', '16115597', 'MN-RM2', 'CPD', '15772354', 21, ''),
    new Veiculos(2, "uno", "fiat", 2001, "SAD-5554", "21405123601", "cinza", 'Joao Henrique Carolino', '25251222', 'CB-EF', 'SEDIME', '15772354',  221, ''),
    new Veiculos(3, "mobi", "fiat", 2014, "SDF-4557", "02151301245", "prata", 'Kaio Rodrigues Lima', '11010101', '2SG-AR', 'RANCHO', '15772354', 211, ''),
    new Veiculos(4, "fiesta", "ford", 2020, "ASD-4554", "00215132648", "vermelho", 'Jorge Mendonca da Silva', '01010021', 'SO-EF', 'PAIOL', '15772354', 201, ''),
    new Veiculos(5, "eco sport", "ford", 2014, "SDF-2244", "03214568789", "prata", 'Daniel Alves Caria', '02120012', 'CB-PD', 'CPD', '15772354', 11, ''),
    new Veiculos(6, "cruze", "chevrolet", 2018, "FDS-5747", "03216525894", "preto", 'Yasmim da Silva', '01210012', 'CB-PD', 'SEDIME', '15772354', 24, ''),
    new Veiculos(7, "civic", "honda", 2010, "DFR-5478", "02315216235", "prata", 'Brenda Aguiar Ribeiro', '12121124', '3SG-EF', 'SEP', '15772354', 22, ''),
    new Veiculos(8, "s10", "chevrolet", 2005, "HYG-2578", "02215458756", "preto", 'Andre Luiz Moreira', '16525545', '1T(S)', 'MEDICINA', '15772354', 44, ''),
    new Veiculos(9, "s10", "chevrolet", 2006, "MJI-0224", "02132525645", "preto", 'Patrick Costa', '18545225', 'CB-RM2', 'ODONTOLOGIA', '15772354', 81, ''),
    new Veiculos(10, "city", "honda", 2008, "GTF-4478", "02312542624", "prata", 'Pedro Henrique Machado Vasconcelos', '05212121', 'CB-OS', 'FISIOTERAPIA', '15772354', 12, ''),
    new Veiculos(11, "onix", "chevrolet", 2011, "PCX-5525", "00124523125", "preto", 'Henrique Caria Costa', '14212215', 'CM(S)', 'GABINETE', '15772354', 51, ''),
    new Veiculos(12, "c100", "mercedes", 1998, "GTD-5588", "00124251325", "prata", 'Arthur da Silva', '09252112', 'MN-QPA', 'GABINETE', '15772354', 20, ''),

  ]; 



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
