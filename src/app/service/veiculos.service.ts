import { Proprietarios } from './../model/proprietarios';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Veiculos } from '../model/veiculos';


@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  // variaveis
  private readonly API = `${environment.API}veiculos`;
  veiculo: Veiculos = new Veiculos();


  // construtor
  constructor(private http: HttpClient) { }

  // métodos

  listarVeiculos(){
    return this.http.get<Veiculos>(this.API);
  }



  adicionarVeiculos(v): Observable<Veiculos>{
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Veiculos>(this.API,JSON.stringify(v), httpOptions);
  }

}
