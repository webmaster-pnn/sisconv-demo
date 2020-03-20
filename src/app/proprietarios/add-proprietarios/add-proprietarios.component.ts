import { Cor } from './../../model/cor';
import { ProprietariosService } from './../../service/proprietarios.service';
import { Proprietarios } from './../../model/proprietarios';
import { VeiculosService } from './../../service/veiculos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../login/auth.service';
import { Setor } from './../../model/setor';
import { Posto } from './../../model/posto';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Veiculos } from 'src/app/model/veiculos';
import { Montadora } from 'src/app/model/montadora';
import { MontadoraService } from 'src/app/service/montadora.service';
import { Observable } from 'rxjs';
import { PostoService } from 'src/app/service/posto.service';
import { SetorService } from 'src/app/service/setor.service';
import { CorService } from 'src/app/service/cor.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-add-proprietarios',
  templateUrl: './add-proprietarios.component.html',
  styleUrls: ['./add-proprietarios.component.css']
})
export class AddProprietariosComponent implements OnInit {

  // variaveis
  autenticacao: boolean = false;
  hide: boolean = true;
  teste = [1];
  length = this.teste.length;
  num = this.length + 1; 
  lastValue = this.teste[--this.length];


  formulario: FormGroup;
  veiculoForm: FormArray;


  proprietario: Proprietarios = new Proprietarios();
  veiculos: Veiculos = new Veiculos();

  montadoraLista: Montadora [];
  setorLista: Setor[];
  postoLista: Posto[];
  corLista: Cor[];

  


 
  
  constructor(
    private formBuilder: FormBuilder,
    private veiculosService: VeiculosService,
    private proprietariosService: ProprietariosService,
    private montadoraService: MontadoraService,
    private postoService: PostoService,
    private setorService: SetorService,
    private corService: CorService,
    private route: Router,
    private router: ActivatedRoute

    
    ) { } 

  onSubmit(){
    if(this.formulario.valid){
      this.setProprietarios();
      this.setVeiculos();
    } else {
      alert('Campos invalidos');
    }

    



  }

  ngOnInit(){

    
    
    this.getMontadora();
    this.getPosto();
    this.getSetor();
    this.getCor();
    this.proprietario = this.router.snapshot.data['proprietarios'];
    this.createformulario();
    
  

    this.veiculoForm = this.formulario.get('veiculo') as FormArray;

    
    
  }

  emailErro(){
    
    if(this.formulario.get('email').hasError('required')){
      return 'Digite seu email!'
    } else {
      return this.formulario.get('email').hasError('email') ? 'Email invalido!' : '';
    }
  }
  nipErro(){
    if(this.formulario.get('nip').hasError('required')){
      return 'Digite seu NIP'
    } 
  }
  postoErro(){
    if(this.formulario.get('posto').hasError('required')){
      return 'É necessário selecionar o Posto/Grad'
    } 
  }

  incrementa(){
   
   
    this.veiculoForm.push(this.createVeiculo());
    

  }
  createformulario(){

    this.formulario = this.formBuilder.group({
      id: this.proprietario.id,
      cartao: [this.proprietario.cartao, Validators.required],
      nome: [this.proprietario.nome, Validators.required],
      email:[this.proprietario.email, [Validators.required, Validators.email]],
      nip:[this.proprietario.nip, Validators.required ],
      cnh: [this.proprietario.cnh, Validators.required],
      veiculo: this.formBuilder.array([this.createVeiculo()]),
      idPosto: [this.proprietario.idPosto, Validators.required],
      idSetor: [this.proprietario.idSetor, Validators.required]
    });


  }
  createVeiculo(): FormGroup{
    return this.formBuilder.group({
      id: this.veiculos.id,
      modelo:[this.veiculos.modelo, Validators.required],
      ano:[this.veiculos.ano, Validators.required],
      placa:[this.veiculos.placa, Validators.required],
      chassi:[this.veiculos.chassi, Validators.required],
      idMontadora:[this.veiculos.id, Validators.required],
      idCor: [this.veiculos.idCor, Validators.required]


    });
  }

  



  setProprietarios(){
    this.proprietario.id = this.formulario.get('id').value;
    this.proprietario.cartao = this.formulario.get('cartao').value
    this.proprietario.nome = this.formulario.get('nome').value
    this.proprietario.email = this.formulario.get('email').value
    this.proprietario.nip = this.formulario.get('nip').value
    this.proprietario.cnh = this.formulario.get('cnh').value
    this.proprietario.status = true
    this.proprietario.idPosto = this.formulario.get('idPosto').value
    this.proprietario.idSetor = this.formulario.get('idSetor').value

    this.proprietariosService.adicionarProprietario(this.proprietario).subscribe();

  }

 
  setVeiculos(){

      this.veiculoForm.controls.forEach(v => {
      this.veiculos.id = v.get('id').value
      this.veiculos.modelo = v.get('modelo').value
      this.veiculos.ano = v.get('ano').value
      this.veiculos.placa = v.get('placa').value
      this.veiculos.chassi = v.get('chassi').value
      this.veiculos.idMontadora = v.get('idMontadora').value
      this.veiculos.idCor = v.get('idCor').value
      this.veiculos.idProprietario = 1
      
      
      this.veiculosService.adicionarVeiculos(this.veiculos)
        .pipe(
          take(1))
        .subscribe(   success => {alert('gravado com sucesso!')
                                this.route.navigate(['/proprietarios']) }, 
                        error => alert(`Erro ao gravar os dados : ${error}`))

    });
  }

  getMontadora(){

    this.montadoraService.listarMontadora().subscribe((m: Montadora[]) => {
      this.montadoraLista = m
    } );   
  }
  
  getPosto(){
    this.postoService.listarPosto().subscribe((p: Posto[]) => {
      this.postoLista = p
    });
  }
  getSetor(){
    this.setorService.listarSetor().subscribe((s: Setor[]) => {
      this.setorLista = s
    });
  }
  getCor(){
    this.corService.listarCor().subscribe((c: Cor[]) => {
      this.corLista = c
    });
  }
}
