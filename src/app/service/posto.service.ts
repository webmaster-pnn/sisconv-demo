// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Variaveis de Produção
import { environment } from 'src/environments/environment';
// Classes
import { Posto } from '../model/posto';

@Injectable({
  providedIn: 'root'
})
export class PostoService {
  private readonly API = `${environment.API}posto`;


  constructor(private http: HttpClient) { }


  listarPosto(){
    return this.http.get<Posto[]>(this.API);
  }

}
