import { Injectable, Output } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  autenticado: boolean = false;
  usuario: Usuario = new Usuario();
  @Output() mostrarMenuEmitter = new EventEmitter<>();
  
  
  constructor(private router: Router) { 
    
   }

   login(usuario: Usuario){
  
    if(usuario.nip == '16115597' && usuario.senha == '16115597'){
      this.router.navigate(['/home']);
    } else{
      this.autenticado = true;

    }
    
  } 
  
}
