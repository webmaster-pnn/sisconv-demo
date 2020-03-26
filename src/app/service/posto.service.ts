import { take } from 'rxjs/operators';
// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Variaveis de Produção
import { environment } from 'src/environments/environment';
// Classes
import { Posto } from '../model/posto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class PostoService {
  private readonly API = `${environment.API}posto`;


  constructor(private http: HttpClient) { }


  listarPosto(){
    return this.http.get<Posto[]>(this.API).pipe(take(1));
  }
  listarPostoId(id){
    return this.http.get(`${this.API}/${id}`).pipe(take(1));
  }

}
