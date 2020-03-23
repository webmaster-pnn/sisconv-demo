import { Proprietarios } from './../model/proprietarios';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Veiculos } from '../model/veiculos';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

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
    return this.http.get(this.API, httpOptions).pipe(
      map(this.extractData));
  }



  adicionarVeiculos(v): Observable<Veiculos>{
    
    return this.http.post<Veiculos>(this.API,JSON.stringify(v), httpOptions);
  }
  private extractData(res: Response) {
    return res || {}; // If 'res' is null, it returns empty object
  }

}
