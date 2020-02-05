import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from '../model/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();
  
  
  fazerLogin(){
    this.auth.login(this.usuario);
  }

  constructor(private router:Router, private auth: AuthService) { 
  }

  ngOnInit() {
  }

}
