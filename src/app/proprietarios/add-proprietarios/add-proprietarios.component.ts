import { Router } from '@angular/router';
import { AuthService } from './../../login/auth.service';
import { Setor } from './../../model/setor';
import { Posto } from './../../model/posto';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-proprietarios',
  templateUrl: './add-proprietarios.component.html',
  styleUrls: ['./add-proprietarios.component.css']
})
export class AddProprietariosComponent implements OnInit {
  autenticacao: boolean = false;
  hide: boolean = true;

  teste = [1];
  length = this.teste.length;
  num = this.length + 1; 
  lastValue = this.teste[--this.length];

  email =  new FormControl('', [Validators.required, Validators.email]);
  nip = new FormControl('', [Validators.required]);
  placa = new FormControl('', [Validators.required]);
  chassi = new FormControl('', [Validators.required]);

  posto: Posto[] = [
     { 'posto': 'MN-RC'},
     { 'posto': 'MN-RM2'},
     { 'posto': 'MN-QPA'},
     { 'posto': 'CB-EF'},
     { 'posto': 'CB-MA'},
     { 'posto': 'CB-MO'},
     { 'posto': 'CB-AR'},
     { 'posto': '3SG-AR'},
     { 'posto': '3SG-PD'},
     { 'posto': '3SG-MO'},
     { 'posto': '2SG-AR'},
     { 'posto': '2SG-PD'}
  ];
  setor: Setor[] = [
    {'nome': 'CPD'},
    {'nome': 'SEP'},
    {'nome': 'GABINETE'},
    {'nome': 'INTENDENCIA'},
    {'nome': 'SEDIME'},
    {'nome': 'PAIOL'},
    {'nome': 'RANCHO'}
  ]

  emailErro(){
    if(this.email.hasError('required')){
      return 'Digite seu email!'
    } else {
      return this.email.hasError('email') ? 'Email invalido!' : '';
    }
  }
 
  getNip(){
      if(this.nip.invalid){
        return 'Nip invalido';
      } else {
        return this.nip.hasError("required") ? 'Digite o seu nip.' : '';

      }

  }
  incrementa(){
    this.teste.push(++this.lastValue);
  }
  constructor(private logar: AuthService, private router: Router) { } 

  ngOnInit(){
    
   
    console.log('modelo' + this.num);

 
    
  }
  ngOnChanges(){
    
  }

}
