import { Carro } from './../model/Carro';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  veiculo: Carro =  {
    'id': null,
    'modelo': 'fiesta'
  }

  
  


  // variaveis
  private readonly API = `${environment.API}veiculos`;
  constructor(private http: HttpClient) { }

  listarVeiculos(){
    return this.http.get(this.API)
      .subscribe( 
          console.log
      );
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
