import { ProprietariosService } from 'src/app/service/proprietarios.service';
// angular
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-proprietarios',
  templateUrl: './proprietarios.component.html',
  styleUrls: ['./proprietarios.component.css']
})
export class ProprietariosComponent implements OnInit {
 
  botao_adicionar = true;

  constructor(
    private proprietarioService: ProprietariosService
  ){}
  
  ngOnInit() {
    this.proprietarioService.ocultarBotoes.subscribe( botao_status => this.botao_adicionar = botao_status);
  }
  
 
}
