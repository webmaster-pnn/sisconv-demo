import { Carro } from './../model/Carro';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  adicionarVeiculos(): Observable<Carro>{
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Carro>(this.API, JSON.stringify(this.veiculo), httpOptions);
  }

}
