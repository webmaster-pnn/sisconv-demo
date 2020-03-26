import { Injectable, Output, EventEmitter, Component } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  usuario: Usuario = new Usuario();
 
  
  autenticar =new EventEmitter<boolean>();
  exibir = new EventEmitter<boolean>();
  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { 
    
   }

   login(usuario: Usuario){
  
    if(usuario.nip == '16115597' && usuario.senha == '16115597'){

      this.autenticar.emit(true);
      this.usuarioAutenticado = true;
      
      this.router.navigate(['/home']);
     
      
    } else{
      
      this.autenticar.emit(false);
      this.usuarioAutenticado = true;


    }
    
  }
  
  getAuth(){
    return this.usuarioAutenticado;
  }
  componente(v){
    if(v){
      this.exibir.emit(true);
    } else {
      this.exibir.emit(false);
    }
  }
  
}
