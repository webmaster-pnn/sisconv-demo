import { Router } from '@angular/router';
import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { AuthService } from './login/auth.service';
import { EEXIST } from 'constants';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SisConV';
  autenticacao: boolean = false;
  exibir: boolean = true;

  logout(){
    this.autenticacao = false;
  }
  
  constructor(private logar: AuthService, 
              private spinner: NgxSpinnerService, 
              private router: Router
              ){}

  ngOnInit(){
    this.logar.autenticar.subscribe(
      autenticando => {
        this.autenticacao = autenticando
        if(autenticando){
          this.ocultar();
        }
      }
    );
    // this.logar.exibir.subscribe(e => this.exibir = e);
      
    
    
    
  }
ocultar(){
         this.exibir = false
          this.spinner.show();
          setTimeout(()=> {
            this.spinner.hide();
          }, 2000);
          setTimeout(()=> this.exibir = true, 2000);
}
    
}


