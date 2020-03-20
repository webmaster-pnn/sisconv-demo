// angular 
import { Component, OnInit, ViewChild } from '@angular/core';
// material design
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
// servicos
import { VeiculoServicoService } from 'src/app/veiculos/veiculo-servico.service';
import { ProprietariosService } from 'src/app/service/proprietarios.service';
import { Proprietarios } from 'src/app/model/proprietarios';
import { take } from 'rxjs/operators';
import { PostoService } from 'src/app/service/posto.service';
import { Posto } from 'src/app/model/posto';
import { Setor } from 'src/app/model/setor';
import { SetorService } from 'src/app/service/setor.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-listar-proprietarios',
  templateUrl: './listar-proprietarios.component.html',
  styleUrls: ['./listar-proprietarios.component.css']
})

export class ListarProprietariosComponent extends MatPaginatorIntl implements OnInit  {
 
  v: VeiculoServicoService;
 
  // instancia de proprietario
  proprietario: Proprietarios[];
 
  // variaveis
  tabela_vazia: boolean = false;

  // colunas da tabela
  displayedColumns: string[] = ['posto', 'nome', 'nip', 'setor','cnh', 'editar'];
 
  // criando um novo objeto da tabela data source e passando o proprietario como parametro
  dataSource: MatTableDataSource<Proprietarios>;

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

  constructor(
    private proprietarioService: ProprietariosService,
    private postoService: PostoService,
    private setorService: SetorService,
    private route: ActivatedRoute
    ) { 
  
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

    this.dataSource = new MatTableDataSource();
    // const data = this.route.snapshot.data['proprietarios'];
    // this.dataSource.data = data;
    this.getProprietarios();
    // this.getPosto();
    
    
    // atribuindo ao proprietario a paginação e os filtros.
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
    

  }

  getProprietarios(){
    const proprietario$ = this.proprietarioService.listarProprietario();
    proprietario$.subscribe((p: Proprietarios []) => {

      p.forEach(data => {
      
        const posto$ = this.postoService.listarPostoId(data.idPosto);
        posto$.subscribe( (posto: Posto) => {
          data.descPosto = posto.descricao;
        })
      })

      p.forEach(data => {
      
        const setor$ = this.setorService.listarSetorId(data.idSetor);
        setor$.subscribe( (setor: Setor) => {
          data.descSetor = setor.descricao;
        })
      })

      this.dataSource.data = p
      
      // verificando quando o objeto estiver vazio
      if(p.length == 0){
        this.tabela_vazia = true;
      }

      return p;
            
    }, 
    error => alert(`Erro ao buscar os dados : ${error}`));  
      
  }

  
    
 

}
