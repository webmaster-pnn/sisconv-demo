import { Router } from '@angular/router';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SisConV';
  autenticacao: boolean = false;
 
  logout(){
    this.autenticacao = false;
  }
  
  constructor(private logar: AuthService, private router: Router){
    
  }
  ngOnInit(){
    this.logar.autenticar.subscribe(
      autenticando => this.autenticacao = autenticando
    );
    

    
    
  }
}


