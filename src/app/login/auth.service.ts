import { Injectable, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  autenticado: boolean = false;
  usuario: Usuario = new Usuario();
 
  
  mostrarMenu =new EventEmitter<boolean>();
  constructor(private router: Router) { 
    
   }

   login(usuario: Usuario){
  
    if(usuario.nip == '16115597' && usuario.senha == '16115597'){
      this.router.navigate(['/home']);
      this.mostrarMenu.emit(true);
    } else{
      this.autenticado = true;
      this.mostrarMenu.emit(false);

    }
    
  } 
  
}
