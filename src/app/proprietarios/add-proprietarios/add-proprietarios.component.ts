import { Cor } from './../../model/cor';
import { ProprietariosService } from './../../service/proprietarios.service';
import { Proprietarios } from './../../model/proprietarios';
import { VeiculosService } from './../../service/veiculos.service';
import { Router } from '@angular/router';
import { AuthService } from './../../login/auth.service';
import { Setor } from './../../model/setor';
import { Posto } from './../../model/posto';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Veiculos } from 'src/app/model/veiculos';

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
  veiculo: FormArray;

  proprietario: Proprietarios = new Proprietarios();
  veiculos: Veiculos = new Veiculos();
  veiculoLista:  Array<Veiculos>;
  setor: Setor = new Setor();
  posto: Posto = new Posto();
  cor: Cor = new Cor();


 
  
  constructor(
    private formBuilder: FormBuilder,
    private veiculosService: VeiculosService,
    private proprietariosService: ProprietariosService
    
    ) { } 

  onSubmit(){
    
    this.setProprietarios();
    this.setVeiculos();




  }

  ngOnInit(){
    this.createformulario();
    this.veiculo= this.formulario.get('veiculo') as FormArray;
    

    // this.veiculosService.listarVeiculos().subscribe((veiculo: Veiculos) => this.v = veiculo);
    
    
  }

  emailErro(){
    
    if(this.formulario.get('email').hasError('required')){
      return 'Digite seu email!'
    } else {
      return this.formulario.get('email').hasError('email') ? 'Email invalido!' : '';
    }
  }

  incrementa(){
   
   
    this.veiculo.push(this.createVeiculo());
    

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
      cor: this.formBuilder.array([this.createCor()]),
      posto: this.formBuilder.array([this.createPosto()]),
      setor: this.formBuilder.array([this.createSetor()])
    });


  }
  createVeiculo(): FormGroup{
    return this.formBuilder.group({
      id: this.veiculos.id,
      modelo:[this.veiculos.modelo, Validators.required],
      montadora:[this.veiculos.montadora, Validators.required],
      ano:[this.veiculos.ano, Validators.required],
      placa:[this.veiculos.placa, Validators.required],
      chassi:[this.veiculos.chassi, Validators.required]

    });
  }
  createCor(){
    return this.formBuilder.group({
      id: this.cor.id,
      descricao: this.cor.descricao
    })
  }
  createPosto(){
    return this.formBuilder.group({
      id: this.posto.id,
      descricao: this.posto.descricao
    })
  }
  createSetor(){
    return this.formBuilder.group({
      id: this.setor.id,
      descricao: this.setor.descricao
    })
  }



  setProprietarios(){
    this.proprietario.id = this.formulario.get('id').value;
    this.proprietario.cartao = this.formulario.get('cartao').value
    this.proprietario.nome = this.formulario.get('nome').value
    this.proprietario.email = this.formulario.get('email').value
    this.proprietario.nip = this.formulario.get('nip').value
    this.proprietario.cnh = this.formulario.get('cnh').value
    this.proprietario.status = true
    this.proprietario.idPosto = 1
    this.proprietario.idSetor = 1

    this.proprietariosService.adicionarProprietario(this.proprietario).subscribe();

  }

 
  setVeiculos(){

  console.log(this.veiculoLista);
    this.veiculo.controls.forEach(v => {
      this.veiculos.id = v.get('id').value
      this.veiculos.modelo = v.get('modelo').value
      this.veiculos.montadora = v.get('montadora').value
      this.veiculos.ano = v.get('ano').value
      this.veiculos.placa = v.get('placa').value
      this.veiculos.chassi = v.get('chassi').value
      this.veiculos.idcor = 2
      this.veiculos.idProprietario = 2
      
      
      this.veiculosService.adicionarVeiculos(this.veiculos).subscribe()

    });
  }
  
}
