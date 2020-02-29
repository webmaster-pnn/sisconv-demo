import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-proprietarios',
  templateUrl: './add-proprietarios.component.html',
  styleUrls: ['./add-proprietarios.component.css']
})
export class AddProprietariosComponent implements OnInit {
  hide: boolean = true;
  email =  new FormControl('', [Validators.required, Validators.email]);
  nip = new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]);

  emailErro(){
    if(this.email.hasError('required')){
      return 'Digite seu email!'
    } else {
      return this.email.hasError('email') ? 'Email invalido!' : '';
    }
  }
 
  getNip(){
    
      if(this.nip.value == "16115597"){
        console.log("nip OK");
      }  else if( this.nip.hasError('required')){
      return this.nip.hasError("required") ? 'Digite o seu nip.' : '';

      } else {
        console.log("nip errado");
        

    }
  }
  constructor() { } 

  ngOnInit(){
  }
  ngOnChanges(){
    
  }

}
