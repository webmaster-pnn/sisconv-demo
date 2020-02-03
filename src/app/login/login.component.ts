import { Component, OnInit } from '@angular/core';
import { SSL_OP_NETSCAPE_CHALLENGE_BUG } from 'constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: any = {
    nip: '',
    senha: ''
  }
  onSubmit(form){
    console.log(form);
    console.log(this.usuario)
  }

  constructor() { }

  ngOnInit() {
  }

}
