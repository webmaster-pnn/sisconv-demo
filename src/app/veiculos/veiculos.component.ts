import { VeiculoServicoService } from './veiculo-servico.service';
import { Component, OnInit, ViewChild } from '@angular/core';

// material design

import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
// classes
import { Proprietarios } from './../model/proprietarios';
import { Veiculos } from '../model/veiculos';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']  
})
export class VeiculosComponent extends MatPaginatorIntl implements OnInit {

  // instancia de veiculo
  veiculo: Array<Veiculos>  = [
    new Veiculos(1, "passat", "Volkswagen", 1999, "CXZ-2233", "05123468745", "prata", 'carlos', '16115597', 'MN-RM2', 'CPD', '15772354', ''),
    new Veiculos(2, "uno", "fiat", 2001, "SAD-5554", "21405123601", "cinza", 'joao', '25251222', 'CB-EF', 'SEDIME', '15772354', ''),
    new Veiculos(3, "mobi", "fiat", 2014, "SDF-4557", "02151301245", "prata", 'kaio', '11010101', '2SG-AR', 'RANCHO', '15772354', ''),
    new Veiculos(4, "fiesta", "ford", 2020, "ASD-4554", "00215132648", "vermelho", 'jorge', '01010021', 'SO-EF', 'PAIOL', '15772354', ''),
    new Veiculos(5, "eco sport", "ford", 2014, "SDF-2244", "03214568789", "prata", 'daniel', '02120012', 'CB-PD', 'CPD', '15772354', ''),
    new Veiculos(6, "cruze", "chevrolet", 2018, "FDS-5747", "03216525894", "preto", 'yasmim', '01210012', 'CB-PD', 'SEDIME', '15772354', ''),
    new Veiculos(7, "civic", "honda", 2010, "DFR-5478", "02315216235", "prata", 'brenda', '12121124', '3SG-EF', 'SEP', '15772354', ''),
    new Veiculos(8, "s10", "chevrolet", 2005, "HYG-2578", "02215458756", "preto", 'andre', '16525545', '1T(S)', 'MEDICINA', '15772354', ''),
    new Veiculos(9, "s10", "chevrolet", 2006, "MJI-0224", "02132525645", "preto", 'patrick', '18545225', 'CB-RM2', 'ODONTOLOGIA', '15772354', ''),
    new Veiculos(10, "city", "honda", 2008, "GTF-4478", "02312542624", "prata", 'pedro', '05212121', 'CB-OS', 'FISIOTERAPIA', '15772354', ''),
    new Veiculos(11, "onix", "chevrolet", 2011, "PCX-5525", "00124523125", "preto", 'henrique', '14212215', 'CM(S)', 'GABINETE', '15772354', ''),
    new Veiculos(12, "c100", "mercedes", 1998, "GTD-5588", "00124251325", "prata", 'arthur', '09252112', 'MN-QPA', 'GABINETE', '15772354', ''),

  ]; 

  

 
// variaveis
tabela_vazia: boolean = false;

// colunas da tabela
displayedColumns: string[] = ['modelo','placa', 'cor', 'nip','nome', 'editar'];
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
