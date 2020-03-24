import { ProprietariosService } from 'src/app/service/proprietarios.service';
import { Proprietarios } from 'src/app/model/proprietarios';
import { Cor } from './../../model/cor';
import { VeiculosService } from './../../service/veiculos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../login/auth.service';
import { Setor } from './../../model/setor';
import { Posto } from './../../model/posto';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { Veiculos } from 'src/app/model/veiculos';
import { Montadora } from 'src/app/model/montadora';
import { MontadoraService } from 'src/app/service/montadora.service';
import { Observable, Subject, Subscriber, Subscription, timer } from 'rxjs';
import { PostoService } from 'src/app/service/posto.service';
import { SetorService } from 'src/app/service/setor.service';
import { CorService } from 'src/app/service/cor.service';
import { take, map, concatMap, switchMap, exhaust, exhaustMap } from 'rxjs/operators';
const p$ = new Subject<ProprietariosService>()

const teste$ = Observable.create((observer) => {
  observer.next('teste 1');
  setTimeout(()=> observer.next('teste 2'), 2000)
  setTimeout(()=> observer.complete(), 2000)
}


)
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
  id: any;

  proprietario: Proprietarios = new Proprietarios();
  veiculos: Veiculos = new Veiculos();

  proprietarioLista: Proprietarios[];
  veiculoLista = [];
  montadoraLista: Montadora[];
  setorLista: Setor[];
  postoLista: Posto[];
  corLista: Cor[];
  t = new Subject<number>();





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

  onSubmit() {
    // if (this.formulario.valid) {
    //   if (this.formulario.get('id').value) {
    //     this.proprietariosService.atualizarProprietario(this.formulario).subscribe(
    //       success => { alert('Atualizado com sucesso') },
    //       error => { alert('erro ao atualizar' + error) }
    //     )
    //   } else {
              
    //     this.setProprietarios();
    //   }




    // } else {
    //   alert('Campos invalidos');
    // }
      // this.setVeiculos(this.veiculos, this.proprietariosService, this.veiculosService)
      this.setProprietarios()
      // this.setVeiculos()
      //  console.log(this.veiculoLista)
      //  console.log(this.formulario.get('veiculo'))
 

  }

  ngOnInit() {



    this.getMontadora();
    this.getPosto();
    this.getSetor();
    this.getCor();
    // timer(1000).subscribe(v => console.log(v++))
    // teste$.subscribe(data => console.log(data))
    this.proprietario = this.router.snapshot.data['proprietarios'];

    
    
    this.createformulario();
    this.veiculoForm = this.formulario.get('veiculo') as FormArray;

    if (this.proprietario.id) {
      this.getVeiculos(this.proprietario.id);
      
     } else {

      this.veiculoForm.push(this.createVeiculo())

     }

    



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

    this.veiculoForm.push(this.createVeiculo());



  }
  createformulario() {

    this.formulario = this.formBuilder.group({
      id: this.proprietario.id,
      cartao: [this.proprietario.cartao, Validators.required],
      nome: [this.proprietario.nome, Validators.required],
      email: [this.proprietario.email, [Validators.required, Validators.email]],
      nip: [this.proprietario.nip, Validators.required],
      cnh: [this.proprietario.cnh, Validators.required],
      veiculo: this.formBuilder.array([]),
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

    this.proprietariosService.adicionarProprietario(this.proprietario).subscribe()
    setTimeout(()=>this.setVeiculos(),2000)
    // this.proprietariosService.adicionarProprietario(this.proprietario).subscribe(success => {
    //   alert('gravado com sucesso!')
    //   this.route.navigate(['/proprietarios'])
    // },
    //   error => alert(`Erro ao gravar os dados : ${error}`));
   
      // this.setVeiculos(this.veiculos, this.proprietariosService, this.veiculosService)
  }


  setVeiculos() {

    this.proprietariosService.ultimoId()
      .subscribe( p => {
        this.veiculoForm.controls.forEach(v => {
          console.log('adicionando')
            this.adiciona(v) 
          console.log('buscando id')
            
          this.ultimoId(p)
          console.log('salvando veiculos')
        
        this.veiculosService.adicionarVeiculos(this.veiculos).subscribe()
          console.log('termino')
      })});

    
    
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
  

  adicionarUsuario(veiculo: Veiculos){


    
    const proprietarios$ = this.proprietariosService.ultimoId();
    proprietarios$
    .subscribe( p => {
      
      this.ultimoId(p)
      this.veiculosService.adicionarVeiculos(veiculo).subscribe()
    })
  }

  ultimoId(lista: Proprietarios[]){
    this.veiculos.idProprietario = lista.length
  }
  adicionarVeiculo(lista){
    this.veiculoLista = lista
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
}
