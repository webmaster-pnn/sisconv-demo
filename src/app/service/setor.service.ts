
// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Variaveis de Produção
import { environment } from 'src/environments/environment';
// Classes
import { Setor } from '../model/setor';

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  private readonly API = `${environment.API}setor`;


  constructor(private http: HttpClient) { }


  listarSetor(){
    return this.http.get<Setor[]>(this.API);
  }
}
