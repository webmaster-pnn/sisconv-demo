import { Injectable, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  usuario: Usuario = new Usuario();
 
  
  autenticar =new EventEmitter<boolean>();
  constructor(private router: Router) { 
    
   }

   login(usuario: Usuario){
  
    if(usuario.nip == '16115597' && usuario.senha == '16115597'){
      this.router.navigate(['/home']);
      this.autenticar.emit(true);
    } else{
      
      this.autenticar.emit(false);

    }
    
  } 
  
}
