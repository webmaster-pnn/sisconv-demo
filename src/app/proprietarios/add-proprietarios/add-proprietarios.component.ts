import { Observable } from 'rxjs';
// core
import { Component, OnInit, OnChanges } from '@angular/core';
// roteamento
import { Router, ActivatedRoute } from '@angular/router';
// forms
import {  Validators, FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';
// Observable
import {  Subject } from 'rxjs';
// modelos
import { Proprietarios } from 'src/app/model/proprietarios';
import { Cor } from './../../model/cor';
import { Setor } from './../../model/setor';
import { Posto } from './../../model/posto';
import { Veiculos } from 'src/app/model/veiculos';
import { Montadora } from 'src/app/model/montadora';
// servicos
import { MontadoraService } from 'src/app/service/montadora.service';
import { PostoService } from 'src/app/service/posto.service';
import { SetorService } from 'src/app/service/setor.service';
import { CorService } from 'src/app/service/cor.service';
import { VeiculosService } from './../../service/veiculos.service';
import { ProprietariosService } from 'src/app/service/proprietarios.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';


@Component({
  selector: 'app-add-proprietarios',
  templateUrl: './add-proprietarios.component.html',
  styleUrls: ['./add-proprietarios.component.css']
})

export class AddProprietariosComponent implements OnInit {

  // variaveis
  formulario: FormGroup;
  veiculoForm: FormArray;

  proprietario: Proprietarios = new Proprietarios();
  veiculos: Veiculos = new Veiculos();

  submit = 'Cadastrar'
  proprietarioLista: Proprietarios[];
  veiculoLista = [];
  montadoraLista: Montadora[];
  setorLista: Setor[];
  postoLista: Posto[];
  corLista: Cor[];

  bsModalRef: BsModalRef; 

  constructor(
    private formBuilder: FormBuilder,
    private veiculosService: VeiculosService,
    private proprietariosService: ProprietariosService,
    private montadoraService: MontadoraService,
    private postoService: PostoService,
    private setorService: SetorService,
    private corService: CorService,
    private route: Router,
    private router: ActivatedRoute,
    private modalService: BsModalService


  ) { }

  onSubmit() {
    if (this.formulario.valid) {
            this.atualizarDados();
          
    } else {
      this.modal('Campos invalidos', 'danger');
    }
     
 

  }

  ngOnInit() {
    this.proprietariosService.ocultarBotoes.emit(false);
    this.veiculoForm = new FormArray([]);

    this.getMontadora();
    this.getPosto();
    this.getSetor();
    this.getCor();
    // timer(1000).subscribe(v => console.log(v++))
    // teste$.subscribe(data => console.log(data))
    this.proprietario = this.router.snapshot.data['proprietarios'];

    if (this.proprietario.id != null){
      this.submit = 'Atualizar'
    }

    
    
    this.createformulario();
    
    this.veiculoForm = this.formulario.get('veiculo') as FormArray;

    if (this.proprietario.id) {
      this.getVeiculos(this.proprietario.id);
      
     } else {

      this.veiculoForm.push(this.createVeiculo())

     }
    
    console.log(this.veiculoForm)
    console.log(this.formulario)
    console.log(this.formulario.get('veiculo'))



  }

  emailErro() {

    if (this.formulario.get('email').hasError('required')) {
      return 'Digite seu email!'
    } else {
      return this.formulario.get('email').hasError('email') ? 'Email invalido!' : '';
    }
  }
  nipErro() {
    if (this.formulario.get('nip').hasError('required')) {
      return 'Digite seu NIP'
    }
  }
  postoErro() {
    if (this.formulario.get('posto').hasError('required')) {
      return 'É necessário selecionar o Posto/Grad'
    }
  }

  incrementa() {
    if (this.proprietario.id == null){
           this.veiculoForm.push(this.createVeiculo());

    } else {
      this.veiculoForm.push(this.formBuilder.group({
        id: null,
        modelo: [null, Validators.required],
        ano: [null, Validators.required],
        placa: [null, Validators.required],
        chassi: [null, Validators.required],
        idMontadora: [null, Validators.required],
        idCor: [null, Validators.required]
        
  
      }));
    }

    



  }
  createformulario() {
    
    this.formulario = this.formBuilder.group({
      id: this.proprietario.id,
      cartao: [this.proprietario.cartao, Validators.required],
      nome: [this.proprietario.nome, Validators.required],
      email: [this.proprietario.email, [Validators.required, Validators.email]],
      nip: [this.proprietario.nip, Validators.required],
      cnh: [this.proprietario.cnh, Validators.required],
      veiculo: this.veiculoForm,
      idPosto: [this.proprietario.idPosto, Validators.required],
      idSetor: [this.proprietario.idSetor, Validators.required]
    });


  }
  createVeiculo(): FormGroup {
    return this.formBuilder.group({
      id: this.veiculos.id,
      modelo: [this.veiculos.modelo, Validators.required],
      ano: [this.veiculos.ano, Validators.required],
      placa: [this.veiculos.placa, Validators.required],
      chassi: [this.veiculos.chassi, Validators.required],
      idMontadora: [this.veiculos.idMontadora, Validators.required],
      idCor: [this.veiculos.idCor, Validators.required]


    });
  }





    setProprietarios() {
    
    this.proprietario.id = this.formulario.get('id').value;
    this.proprietario.cartao = this.formulario.get('cartao').value
    this.proprietario.nome = this.formulario.get('nome').value
    this.proprietario.email = this.formulario.get('email').value
    this.proprietario.nip = this.formulario.get('nip').value
    this.proprietario.cnh = this.formulario.get('cnh').value
    this.proprietario.status = true
    this.proprietario.idPosto = this.formulario.get('idPosto').value
    this.proprietario.idSetor = this.formulario.get('idSetor').value

    this.proprietariosService.salvarProprietario(this.proprietario).subscribe(success => {
      if(status){
        this.modal('Dados atualizados com sucesso!', 'success');
      } else {
        this.modal('Dados salvos com sucesso!', 'success');
      }
    } ,  error => this.modal(`Erro ao gravar os dados : ${error}`, 'danger')
);
   

  }


  setVeiculos() {
      
      this.veiculoForm.controls.forEach(v => {
          this.adiciona(v) 
          this.veiculosService.salvarVeiculos(this.veiculos).subscribe( error => {
            if(status){
              this.modal(`Erro ao atualizar os dados : ${error}`, 'danger')
            } else {
              this.modal(`Erro ao gravar os dados : ${error}`, 'danger')
            }
          })
    })
    
    
  }

  getMontadora() {

    this.montadoraService.listarMontadora().subscribe((m: Montadora[]) => {
      this.montadoraLista = m
    });
  }

  getPosto() {
    this.postoService.listarPosto().subscribe((p: Posto[]) => {
      this.postoLista = p
    });
  }
  getSetor() {
    this.setorService.listarSetor().subscribe((s: Setor[]) => {
      this.setorLista = s
    });
  }
  getCor() {
    this.corService.listarCor().subscribe((c: Cor[]) => {
      this.corLista = c
    });
  }

  getVeiculos(id: number) {
    this.veiculosService.listarVeiculos().subscribe(
      (v: Veiculos[]) => {
        v.map((veiculo: Veiculos) => {
          if (veiculo.idProprietario == id) {
            this.veiculos = veiculo
            this.veiculoForm.push(this.createVeiculo()) 
          }
        })
      }
    )
  }
  

  

  ultimoId(lista: Proprietarios[]){
    this.veiculos.idProprietario = lista.length
  }


  adiciona(v: AbstractControl){

     this.veiculos.id = v.get('id').value
      this.veiculos.modelo = v.get('modelo').value
      this.veiculos.ano = v.get('ano').value
      this.veiculos.placa = v.get('placa').value
      this.veiculos.chassi = v.get('chassi').value
      this.veiculos.idMontadora = v.get('idMontadora').value
      this.veiculos.idCor = v.get('idCor').value
  }

  atualizarDados(){
    let status: boolean = false;
    if(this.proprietario.id != null){
      status = true;
    }
    const dados$ = new Observable(dados=>{

      dados.next(this.setProprietarios())
      if (this.veiculos.idProprietario == null){
        setTimeout(() => dados.next(
          this.proprietariosService.ultimoId()
              .subscribe( p => {
                this.ultimoId(p)
                dados.next(this.setVeiculos())
                
              })
        ), 2000) } else {
        dados.next(this.setVeiculos()) 
        }
      
      dados.complete()
    });
    dados$.subscribe(success => {
      this.route.navigate(['/proprietarios'])
    });
  }

  private modal(mensagem, tipo){
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.tipo = tipo;
    this.bsModalRef.content.mensagem = mensagem;
    
  }
}
