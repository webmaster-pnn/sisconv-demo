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
import { delay } from 'rxjs/operators';
import { PostoService } from 'src/app/service/posto.service';
import { Posto } from 'src/app/model/posto';
import { Setor } from 'src/app/model/setor';
import { SetorService } from 'src/app/service/setor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VeiculosService } from 'src/app/service/veiculos.service';
import { Veiculos } from 'src/app/model/veiculos';
import { Observable } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';



@Component({
  selector: 'app-listar-proprietarios',
  templateUrl: './listar-proprietarios.component.html',
  styleUrls: ['./listar-proprietarios.component.css']
})

export class ListarProprietariosComponent extends MatPaginatorIntl implements OnInit  {
 
  v: VeiculoServicoService;
 
  // instancia de proprietario
  proprietario: Proprietarios[];

  setor$: Observable<any>;
  posto$: Observable<any>;
  proprietario$: Observable<any>;
  // variaveis
  tabela_vazia: boolean = false;
  bsModalRef: BsModalRef;
  // colunas da tabela
  displayedColumns: string[] = ['posto', 'nome', 'nip', 'setor','cnh', 'editar', 'remover'];
 
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
    private veiculosService: VeiculosService,
    private postoService: PostoService,
    private setorService: SetorService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService
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
    console.log('dentro')
    this.proprietario$ = this.proprietarioService.listarProprietario()
    this.proprietario$
    .subscribe((p: Proprietarios []) => {

      p.forEach(proprietario => {
        this.posto$ = this.postoService.listarPostoId(proprietario.idPosto);
        
        this.posto$.subscribe( (posto: Posto) => proprietario.descPosto = posto.descricao)
      
      
        this.setor$ = this.setorService.listarSetorId(proprietario.idSetor);
        this.setor$.subscribe( (setor: Setor) => proprietario.descSetor = setor.descricao)
      })

      this.dataSource.data = p
      
      // verificando quando o objeto estiver vazio
      if(p.length == 0){
        this.tabela_vazia = true;
      }

      return p;
            
    }, 
    error => this.modal(`Erro ao buscar os dados : ${error}`, 'danger'));  
      
  }

  teste(id){
    const remover$ = new Observable(dados =>{
      dados.next(this.removerVeiculos(id))
      
      setTimeout(()=> {

        dados.next(this.proprietarioService.removerProprietario(id).pipe(delay(2000)).subscribe())
      }, 2000)
      dados.next(this.getProprietarios())
      dados.complete()
    });

    remover$.subscribe(success => {
      
      this.modal('Proprietario removido com sucesso!', 'success')
       
      
    },
      error => this.modal(`Erro ao remover Proprietario : ${error}`, 'danger'));
  }
  private modal(mensagem, tipo){
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.tipo = tipo;
    this.bsModalRef.content.mensagem = mensagem;
    
  }

  private removerVeiculos(id){
   
    this.veiculosService.listarVeiculos().subscribe(
      (v: Veiculos[]) => {
        v.map((veiculo: Veiculos) => {
          if (veiculo.idProprietario == id) {
            console.log('removendo veiculos')
           this.veiculosService.removerVeiculo(veiculo.id).subscribe()
          }
        })
      }
    )
   }  
 

}
