import { take } from 'rxjs/operators';

// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Variaveis de Produção
import { environment } from 'src/environments/environment';
// Classes
import { Cor } from '../model/cor';

@Injectable({
  providedIn: 'root'
})
export class CorService {
  private readonly API = `${environment.API}cor`;


  constructor(private http: HttpClient) { }


  listarCor(){
    return this.http.get<Cor[]>(this.API).pipe(take(1));
  }
}
