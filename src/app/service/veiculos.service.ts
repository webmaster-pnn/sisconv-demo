import { Veiculos } from './../model/veiculos';
import { Proprietarios } from './../model/proprietarios';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
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

  listarVeiculos() {
    return this.http.get(this.API, httpOptions).pipe(
      map(this.extractData));
  }


  atualizarVeiculos(v) {
    return this.http.put<Veiculos>(`${this.API}/${v.id}`, v).pipe(take(1));
  }
  adicionarVeiculos(v): Observable<Veiculos> {

    return this.http.post<Veiculos>(this.API, JSON.stringify(v), httpOptions);
  }

  salvarVeiculos(veiculo) {
    if (veiculo.id == null){
      return this.adicionarVeiculos(veiculo)
    } else {
      return this.atualizarVeiculos(veiculo)
    }
  }

  private extractData(res: Response) {
    return res || {}; // If 'res' is null, it returns empty object
  }

}
