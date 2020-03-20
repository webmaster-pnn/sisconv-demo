// angular
import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

// class
import { Proprietarios } from './../model/proprietarios';


// variaveis de producao
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProprietariosService {

  // variaveis

  private readonly API = `${environment.API}proprietarios`;


  constructor(private http: HttpClient) { }


  adicionarProprietario(p): Observable<Proprietarios>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.post<Proprietarios>(this.API, JSON.stringify(p), httpOptions)
                    .pipe(take(1))
  }

  listarProprietario(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(this.API, httpOptions).pipe(
      map(this.extractData));
  }

  private extractData(res: Response) {
    return res || {}; // If 'res' is null, it returns empty object
  }
  

}
