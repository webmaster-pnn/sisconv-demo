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
  private atualizarVeiculos(v) {
    return this.http.put<Veiculos>(`${this.API}/${v.id}`, v).pipe(take(1));
  }
  private adicionarVeiculos(v): Observable<Veiculos> {

    return this.http.post<Veiculos>(this.API, JSON.stringify(v), httpOptions).pipe(take(1));
  }
  private extractData(res: Response) {
    return res || {}; // If 'res' is null, it returns empty object
  }

  listarVeiculos() {
    return this.http.get(this.API, httpOptions).pipe(
      map(this.extractData),
      take(1));
  }

  salvarVeiculos(veiculo) {
    if (veiculo.id == null){
      return this.adicionarVeiculos(veiculo)
    } else {
      return this.atualizarVeiculos(veiculo)
    }
  }
  removerVeiculo(id){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
  

}
