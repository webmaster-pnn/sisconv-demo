import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: any = {
    nip: null,
    senha: null
  }
  pageError: Boolean = false;
  
  onSubmit(form){
    if(this.usuario.nip == 16115597 && this.usuario.senha == 16115597){
      this.router.navigate(['/home']);
    } else{
      this.pageError = true;

    }
  }

  constructor(private router:Router) { 
  }

  ngOnInit() {
  }

}
