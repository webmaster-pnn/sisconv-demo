// Angular Core
import { Injectable } from '@angular/core';
// Angular forms
import { FormGroup, FormArray } from '@angular/forms';

// classes
import { Veiculos } from 'src/app/model/veiculos';
import { Montadora } from 'src/app/model/montadora';
import { Setor } from '../model/setor';
import { Posto } from '../model/posto';
import { Cor } from '../model/cor';
import { Proprietarios } from '../model/proprietarios';
// serviços
import { MontadoraService } from 'src/app/service/montadora.service';
import { PostoService } from 'src/app/service/posto.service';
import { SetorService } from 'src/app/service/setor.service';
import { CorService } from 'src/app/service/cor.service';
import { VeiculosService } from '../service/veiculos.service';
import { ProprietariosService } from '../service/proprietarios.service';


@Injectable({
    providedIn: 'root'
  })

export class CrudController {


    proprietario: Proprietarios = new Proprietarios();
    veiculos: Veiculos = new Veiculos();

    montadoraLista: Montadora [];
    setorLista: Setor[];
    postoLista: Posto[];
    corLista: Cor[];


    constructor(
    private veiculosService: VeiculosService,
    private proprietariosService: ProprietariosService,
    private montadoraService: MontadoraService,
    private postoService: PostoService,
    private setorService: SetorService,
    private corService: CorService
    ){}
    
  setProprietarios(formulario: FormGroup){
    this.proprietario.id = formulario.get('id').value;
    this.proprietario.cartao = formulario.get('cartao').value
    this.proprietario.nome = formulario.get('nome').value
    this.proprietario.email = formulario.get('email').value
    this.proprietario.nip = formulario.get('nip').value
    this.proprietario.cnh = formulario.get('cnh').value
    this.proprietario.status = true
    this.proprietario.idPosto = formulario.get('idPosto').value
    this.proprietario.idSetor = formulario.get('idSetor').value

    this.proprietariosService.adicionarProprietario(this.proprietario).subscribe();

  }

 
  setVeiculos(veiculoForm: FormArray){

      veiculoForm.controls.forEach(v => {
      this.veiculos.id = v.get('id').value
      this.veiculos.modelo = v.get('modelo').value
      this.veiculos.ano = v.get('ano').value
      this.veiculos.placa = v.get('placa').value
      this.veiculos.chassi = v.get('chassi').value
      this.veiculos.idMontadora = v.get('idMontadora').value
      this.veiculos.idCor = v.get('idCor').value
      this.veiculos.idProprietario = 1
      
      
      this.veiculosService.adicionarVeiculos(this.veiculos).subscribe()

    });
  }

  getMontadora(): Montadora[]{

    this.montadoraService.listarMontadora().subscribe((m: Montadora[]) => {
        this.montadoraLista = m
    } );
    return this.montadoraLista   
  }
  
  getPosto(postoLista: Posto[]){
    this.postoService.listarPosto().subscribe((p: Posto[]) => {
        postoLista = p
    });
  }
  getSetor(setorLista: Setor[]){
    this.setorService.listarSetor().subscribe((s: Setor[]) => {
        setorLista = s
    });
  }
  getCor(corLista: Cor[]){
    this.corService.listarCor().subscribe((c: Cor[]) => {
      corLista = c
    });
  }

}